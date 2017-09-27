import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { UsersService } from '../../services/users.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.html',
  styleUrls: ['./user-edit.scss']
})
export class UserEditComponent implements OnInit {
  user: IUser;
  private successfulMsg = 'User update successful!';
  private errorMsg = 'Oops! User update failed...';
  private action = 'Close';
  userEditForm: FormGroup;

  constructor(private _usersService: UsersService,
              private _route: ActivatedRoute,
              private _fb: FormBuilder,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.user = this._route.snapshot.data.user;
    this.userEditForm = this.createUserEditForm(this.user);
  }

  createUserEditForm(user: IUser): FormGroup {
    return this._fb.group({
      name: [user.name, [Validators.required, Validators.minLength(3)]],
      username: [user.username, [Validators.required, Validators.minLength(3)]],
      email: [user.email, Validators.email],
      address: this._fb.group({
        city: [user.address.city, Validators.required],
        street: [user.address.street, Validators.required],
        suite: [user.address.suite, Validators.required]
      })
    });
  }

  openSnackBar(message, action): void {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  updateUser(data) {
    const user: IUser = Object.assign(this.user, data);
    this._usersService.updateUser(user).subscribe(
      () => this.openSnackBar(this.successfulMsg, this.action),
      () => this.openSnackBar(this.errorMsg, this.action)
    );
  }
}
