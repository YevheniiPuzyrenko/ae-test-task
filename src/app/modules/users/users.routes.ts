import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {
  UsersListComponent,
  UserProfileComponent,
  UserEditComponent
} from './components';
import { UsersService } from './services/users.service';

@Injectable()
export class UsersResolver implements Resolve<any[]> {
  constructor(private _service: UsersService) {}

  resolve(): Observable<any>|Promise<any>|any {
    return this._service.getUsers();
  }
}

@Injectable()
export class UsersProfileResolver implements Resolve<any[]> {
  constructor(private _service: UsersService) {}

  resolve(
     route: ActivatedRouteSnapshot
  ): Observable<any>|Promise<any>|any {
    return this._service.getUser(route.params.id);
  }
}

export const ROUTES = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: UsersListComponent,
    resolve: {
      users: UsersResolver
    }
  },
  {
    path: 'view/:id',
    component: UserProfileComponent,
    resolve: {
      user: UsersProfileResolver
    }
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
    resolve: {
      user: UsersProfileResolver
    }
  }
];
