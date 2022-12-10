import { Component } from '@angular/core';
import {MenuService} from '../services/menu.service';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public menuService: MenuService, public authService: AuthService) {
  }
}


