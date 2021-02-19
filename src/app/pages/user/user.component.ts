import { Component } from '@angular/core';
import { Interest } from '../../core/models/interest-data.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public interestsData: Interest[] = [
    {
      id: '1',
      title: 'Interest 1',
      image: 'https://picsum.photos/id/1/150/150',
      subInterests: [],
    },
    {
      id: '2',
      title: 'Interest 2',
      image: 'https://picsum.photos/id/22/150/150',
      subInterests: [],
    },
    {
      id: '3',
      title: 'Interest 3',
      image: 'https://picsum.photos/id/33/150/150',
      subInterests: [],
    },
    {
      id: '4',
      title: 'Interest 4',
      image: 'https://picsum.photos/id/44/150/150',
      subInterests: [],
    },
    {
      id: '5',
      title: 'Interest 5',
      image: 'https://picsum.photos/id/55/150/150',
      subInterests: [],
    },
    {
      id: '6',
      title: 'Interest 6',
      image: 'https://picsum.photos/id/66/150/150',
      subInterests: [],
    },
    {
      id: '7',
      title: 'Interest 7',
      image: 'https://picsum.photos/id/77/150/150',
      subInterests: [],
    },
    {
      id: '8',
      title: 'Interest 8',
      image: 'https://picsum.photos/id/88/150/150',
      subInterests: [],
    },
    {
      id: '9',
      title: 'Interest 9',
      image: 'https://picsum.photos/id/99/150/150',
      subInterests: [],
    },
    {
      id: '10',
      title: 'Interest 10',
      image: 'https://picsum.photos/id/100/150/150',
      subInterests: [],
    },
    {
      id: '11',
      title: 'Interest 11',
      image: 'https://picsum.photos/id/114/150/150',
      subInterests: [],
    },
    {
      id: '12',
      title: 'Interest 12',
      image: 'https://picsum.photos/id/212/150/150',
      subInterests: [],
    },
    {
      id: '13',
      title: 'Interest 13',
      image: 'https://picsum.photos/id/213/150/150',
      subInterests: [],
    },
    {
      id: '14',
      title: 'Interest 14',
      image: 'https://picsum.photos/id/114/150/150',
      subInterests: [],
    },
    {
      id: '15',
      title: 'Interest 15',
      image: 'https://picsum.photos/id/135/150/150',
      subInterests: [],
    },
  ];
  public selectedInterests: { [id: string]: true } = {};

  public handleClick(id: string): void {
    if (this.selectedInterests[id]) {
      delete this.selectedInterests[id];
    } else {
      this.selectedInterests[id] = true;
    }
  }
}
