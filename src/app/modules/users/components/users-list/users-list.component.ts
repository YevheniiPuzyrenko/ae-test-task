import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUser } from '../../models/user.model';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.scss']
})
export class UsersListComponent implements OnInit {
  users: IUser[];

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.users = this._route.snapshot.data['users'];
  }
}
