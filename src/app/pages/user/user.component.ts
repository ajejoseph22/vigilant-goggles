import { Component, OnDestroy, OnInit } from '@angular/core';
import { InterestItem, Interests } from '../../core/models/interest-data.model';
import { KeyMap } from '../../core/models/key-map.model';
import { StateService } from '../../core/services/state.service';
import { ToastrService } from 'ngx-toastr';
import {
  interestPageKey,
  interestsKey,
  interestsToDisplayKey,
  subInterestsKey,
  subSubInterestKey,
} from '../../shared/constants';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public interestsData: Interests = {
    1: {
      title: 'Interest 1',
      image: 'https://picsum.photos/id/1/150/150',
      subInterests: {
        'sub-1': {
          title: 'sub Interest 1',
          image: 'https://picsum.photos/id/1/150/150',
          subInterests: {
            'sub-sub-1': {
              title: 'sub sub Interest 1',
              image: 'https://picsum.photos/id/1/150/150',
            },
          },
        },
        'sub-2': {
          title: 'sub Interest 2',
          image: 'https://picsum.photos/id/1/150/150',
          subInterests: {
            'sub-sub-2': {
              title: 'sub sub Interest 2',
              image: 'https://picsum.photos/id/1/150/150',
            },
          },
        },
      },
    },
    2: {
      title: 'Interest 2',
      image: 'https://picsum.photos/id/22/150/150',
      subInterests: {},
    },
    3: {
      title: 'Interest 3',
      image: 'https://picsum.photos/id/33/150/150',
      subInterests: {},
    },
    4: {
      title: 'Interest 4',
      image: 'https://picsum.photos/id/44/150/150',
      subInterests: {},
    },
    5: {
      title: 'Interest 5',
      image: 'https://picsum.photos/id/55/150/150',
      subInterests: {},
    },
    6: {
      title: 'Interest 6',
      image: 'https://picsum.photos/id/66/150/150',
      subInterests: {},
    },
    7: {
      title: 'Interest 7',
      image: 'https://picsum.photos/id/77/150/150',
      subInterests: {},
    },
    8: {
      title: 'Interest 8',
      image: 'https://picsum.photos/id/88/150/150',
      subInterests: {},
    },
    9: {
      title: 'Interest 9',
      image: 'https://picsum.photos/id/99/150/150',
      subInterests: {},
    },
    10: {
      title: 'Interest 10',
      image: 'https://picsum.photos/id/100/150/150',
      subInterests: {},
    },
    11: {
      title: 'Interest 11',
      image: 'https://picsum.photos/id/114/150/150',
      subInterests: {},
    },
    12: {
      title: 'Interest 12',
      image: 'https://picsum.photos/id/212/150/150',
      subInterests: {},
    },
    13: {
      title: 'Interest 13',
      image: 'https://picsum.photos/id/213/150/150',
      subInterests: {},
    },
    14: {
      title: 'Interest 14',
      image: 'https://picsum.photos/id/114/150/150',
      subInterests: {},
    },
    15: {
      title: 'Interest 15',
      image: 'https://picsum.photos/id/135/150/150',
      subInterests: {},
    },
  };
  public selectedInterestsToDisplay: KeyMap<true> = {};
  public selectedInterests: KeyMap<InterestItem> = {};
  public selectedSubInterests: KeyMap<InterestItem> = {};
  public selectedSubSubInterests: KeyMap<InterestItem> = {};
  public interestsPage = 1;
  public object = Object;

  constructor(
    private stateService: StateService,
    private toaster: ToastrService
  ) {}

  public ngOnInit(): void {
    const persistedInterestsToDisplay = localStorage.getItem(
      interestsToDisplayKey
    );
    const persistedInterests = localStorage.getItem(interestsKey);
    const persistedSubInterests = localStorage.getItem(subInterestsKey);
    const persistedSubSubInterests = localStorage.getItem(subSubInterestKey);

    if (persistedInterestsToDisplay) {
      this.selectedInterestsToDisplay = JSON.parse(persistedInterestsToDisplay);
    }

    if (persistedInterests) {
      this.selectedInterests = JSON.parse(persistedInterests);
    }

    if (persistedSubInterests) {
      this.selectedSubInterests = JSON.parse(persistedSubInterests);
    }

    if (persistedSubSubInterests) {
      this.selectedSubSubInterests = JSON.parse(persistedSubSubInterests);
    }

    this.stateService.interestPage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((page) => {
        this.interestsPage = page;

        if (this.interestsPage === 3) {
          this.toaster.success(
            'Congrats! We have recorded your interests!',
            'Interests collected'
          );
        }
      });
  }

  public handleOnClickInterest(id: string): void {
    if (this.selectedInterestsToDisplay[id]) {
      delete this.selectedInterestsToDisplay[id];
      delete this.selectedInterests[id];
    } else {
      this.selectedInterestsToDisplay[id] = true;
      const { subInterests, ...selectedItem } = this.interestsData[id];
      this.selectedInterests[id] = selectedItem;
    }

    localStorage.setItem(
      interestsToDisplayKey,
      JSON.stringify(this.selectedInterestsToDisplay)
    );
    localStorage.setItem(interestsKey, JSON.stringify(this.selectedInterests));
  }

  public handleOnClickNext(): void {
    if (Object.keys(this.selectedInterestsToDisplay).length < 3) {
      this.toaster.warning('Please select at least 3 interests', 'Uh oh!');
      return;
    }

    this.incrementInterestPage();
  }

  public handleOnClickBack(): void {
    // Can't go backwards if page is 1
    if (this.interestsPage === 1) {
      return;
    }

    const newInterestPage = this.interestsPage - 1;
    this.stateService.interestPage$.next(newInterestPage);
  }

  public handleOnToggleInterest(interestId: string): void {
    if (this.selectedInterests[interestId]) {
      delete this.selectedInterests[interestId];
    } else {
      const { subInterests, ...selectedItem } = this.interestsData[interestId];
      this.selectedInterests[interestId] = selectedItem;
    }

    localStorage.setItem(interestsKey, JSON.stringify(this.selectedInterests));
  }

  public handleOnToggleSubInterest(
    interestId: string,
    subInterestId: string
  ): void {
    if (this.selectedSubInterests[subInterestId]) {
      delete this.selectedSubInterests[subInterestId];
    } else {
      const { subInterests, ...selectedItem } = this.interestsData[
        interestId
      ].subInterests[subInterestId];
      this.selectedSubInterests[subInterestId] = selectedItem;
    }

    localStorage.setItem(
      subInterestsKey,
      JSON.stringify(this.selectedSubInterests)
    );
  }

  public handleOnToggleSubSubInterest(
    interestId: string,
    subInterestId: string,
    subSubInterestId: string
  ): void {
    if (this.selectedSubSubInterests[subSubInterestId]) {
      delete this.selectedSubSubInterests[subSubInterestId];
    } else {
      this.selectedSubSubInterests[subSubInterestId] = this.interestsData[
        interestId
      ].subInterests[subInterestId].subInterests[subSubInterestId];
    }

    localStorage.setItem(
      subSubInterestKey,
      JSON.stringify(this.selectedSubSubInterests)
    );
  }

  public logData(): void {
    console.log('USER INTERESTS: ', {
      ...this.selectedInterests,
      ...this.selectedSubInterests,
      ...this.selectedSubSubInterests,
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  private incrementInterestPage(): void {
    const newInterestPage = this.interestsPage + 1;

    if (+localStorage.getItem(interestPageKey) < newInterestPage) {
      localStorage.setItem(interestPageKey, newInterestPage.toString());
    }

    this.stateService.interestPage$.next(newInterestPage);
  }
}
