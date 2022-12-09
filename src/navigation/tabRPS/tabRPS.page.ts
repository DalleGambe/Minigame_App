import { Component } from '@angular/core';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-tab-rps',
  templateUrl: 'tabRPS.page.html',
  styleUrls: ['tabRPS.page.scss']
})
export class TabRPSPage {


  constructor(public menuService: MenuService) {}
  ionViewWillEnter()
  {
  this.menuService.getAllRpsPages();
  }
}
