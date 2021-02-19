import { Component, OnInit } from '@angular/core';
import { Interests } from '../../core/models/interest-data.model';
import { KeyMap } from '../../core/models/key-map.model';
import { StateService } from '../../core/services/state.service';
import { ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('easeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s  ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s  ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class UserComponent implements OnInit {
  public interestsData: Interests = {
    1: {
      title: 'Interest 1',
      image: 'https://picsum.photos/id/1/150/150',
      subInterests: {
        'sub-1': {
          title: 'sub Interest 1',
          image: 'https://picsum.photos/id/1/150/150',
          subInterests: {},
        },
        'sub-2': {
          title: 'sub Interest 2',
          image: 'https://picsum.photos/id/1/150/150',
          subInterests: {},
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

  public selectedInterests: KeyMap<true> = {};
  public selectedSubInterests: KeyMap<true> = {};
  public interestsPage = 1;
  public object = Object;

  constructor(
    private stateService: StateService,
    private toaster: ToastrService
  ) {}

  public ngOnInit(): void {
    const persistedInterests = localStorage.getItem('interests');
    const persistedSubInterests = localStorage.getItem('sub-interests');

    if (persistedInterests) {
      this.selectedInterests = JSON.parse(persistedInterests);
    }

    if (persistedSubInterests) {
      this.selectedSubInterests = JSON.parse(persistedSubInterests);
    }

    this.stateService.$interestPage.subscribe((page) => {
      console.log('triggered');
      this.interestsPage = page;
    });

    console.log(this.interestsPage);
  }

  public handleClickInterest(id: string): void {
    if (this.selectedInterests[id]) {
      delete this.selectedInterests[id];
    } else {
      this.selectedInterests[id] = true;
    }

    localStorage.setItem('interests', JSON.stringify(this.selectedInterests));
  }

  public handleOnClickNext(): void {
    if (Object.keys(this.selectedInterests).length < 3) {
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
    this.stateService.$interestPage.next(newInterestPage);
  }

  public handleOnToggleSubInterest(subInterestId: string): void {
    console.log('triggered');
    if (this.selectedSubInterests[subInterestId]) {
      delete this.selectedSubInterests[subInterestId];
    } else {
      this.selectedSubInterests[subInterestId] = true;
    }

    localStorage.setItem(
      'sub-interests',
      JSON.stringify(this.selectedSubInterests)
    );
  }

  private incrementInterestPage(): void {
    const newInterestPage = this.interestsPage + 1;

    if (+localStorage.getItem('interestPage') < newInterestPage) {
      localStorage.setItem('interestPage', newInterestPage.toString());
    }

    this.stateService.$interestPage.next(newInterestPage);
  }
}
