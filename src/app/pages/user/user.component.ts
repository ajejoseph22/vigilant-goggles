import { Component, OnInit } from '@angular/core';
import { Interest } from '../../core/models/interest-data.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public interestsData: Interest[] = [
    { id: '1', title: 'Interest 1', image: '', subInterests: [] },
    { id: '1', title: 'Interest 2', image: '', subInterests: [] },
    { id: '1', title: 'Interest 3', image: '', subInterests: [] },
    { id: '1', title: 'Interest 4', image: '', subInterests: [] },
    { id: '1', title: 'Interest 5', image: '', subInterests: [] },
    { id: '1', title: 'Interest 6', image: '', subInterests: [] },
    { id: '1', title: 'Interest 7', image: '', subInterests: [] },
    { id: '1', title: 'Interest 8', image: '', subInterests: [] },
    { id: '1', title: 'Interest 9', image: '', subInterests: [] },
    { id: '1', title: 'Interest 10', image: '', subInterests: [] },
    { id: '1', title: 'Interest 11', image: '', subInterests: [] },
    { id: '1', title: 'Interest 12', image: '', subInterests: [] },
    { id: '1', title: 'Interest 13', image: '', subInterests: [] },
    { id: '1', title: 'Interest 14', image: '', subInterests: [] },
    { id: '1', title: 'Interest 15', image: '', subInterests: [] },
  ];

  constructor() {}

  public ngOnInit(): void {}
}
