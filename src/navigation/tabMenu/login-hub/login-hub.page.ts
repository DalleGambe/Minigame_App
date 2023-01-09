import { Component } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login-hub',
  templateUrl: './login-hub.page.html',
  styleUrls: ['./login-hub.page.scss'],
})
export class LoginHubPage {

  constructor(public authService: AuthService) {
  }
}
