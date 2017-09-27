import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private _http: Http) {}

  getUsers(): Observable<IUser[]> {
    return this._http.get('http://jsonplaceholder.typicode.com/users')
               .map(res => res.json());
  }

  getUser(id: string): Observable<IUser> {
    return this._http.get(`http://jsonplaceholder.typicode.com/users/${id}`)
               .map(res => res.json());
  }

  updateUser(data: IUser): Observable<IUser>  {
    return this._http.put(`http://jsonplaceholder.typicode.com/users/${data.id}`, data)
               .map(res => res.json());
  }
}
