import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatSnackBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES, UsersResolver, UsersProfileResolver } from './users.routes';
import {
  UsersListComponent,
  UserProfileComponent,
  UserEditComponent
} from './components';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    UsersListComponent,
    UserProfileComponent,
    UserEditComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [ UsersProfileResolver, UsersResolver, UsersService ]
})
export class UsersModule {}
