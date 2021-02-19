import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { interestPageKey } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public $interestPage = new ReplaySubject<number>(1);

  constructor() {
    const interestPage = localStorage.getItem(interestPageKey);

    if (interestPage) {
      this.$interestPage.next(+interestPage);
    }
  }
}
