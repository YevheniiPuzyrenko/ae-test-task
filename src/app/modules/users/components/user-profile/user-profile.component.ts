import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.scss']
})
export class UserProfileComponent implements OnInit {
  user: IUser;
  constructor(private _route: ActivatedRoute,
              private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.user = this._route.snapshot.data.user;
  }

  getIframeUrl(): SafeResourceUrl {
    const { lat, lng } = this.user.address.geo;
    const BASE = 'https://www.google.com/maps/embed/v1/view';
    const API_KEY = 'AIzaSyCEcp3L8e_f4l-xcPAhxqRWJ4mw4xnUT3w';
    const URL = `${BASE}?key=${API_KEY}&center=${lat},${lng}`;

    return this._sanitizer.bypassSecurityTrustResourceUrl(URL);
  }
}
