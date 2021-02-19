import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public $interestPage = new ReplaySubject<number>(1);

  constructor() {
    const interestPage = localStorage.getItem('interestPage');

    if (interestPage) {
      this.$interestPage.next(+interestPage);
    }
  }
}
