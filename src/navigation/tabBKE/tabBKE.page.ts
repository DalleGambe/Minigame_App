import { Component } from '@angular/core';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-tab-bke',
  templateUrl: 'tabBKE.page.html',
  styleUrls: ['tabBKE.page.scss']
})
export class TabBKEPage {

  constructor(public menuService: MenuService) {}
  ionViewWillEnter()
  {
    this.menuService.getAllBkePages();
  }
}
