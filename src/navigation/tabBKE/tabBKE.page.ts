import { Component } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-tab-bke',
  templateUrl: 'tabBKE.page.html',
  styleUrls: ['tabBKE.page.scss']
})
export class TabBKEPage {

  constructor(public menuService: MenuService, public menuController: MenuController) {}
  ionViewWillEnter()
  {
    //enables the sidemenu when the user leaves the BKE page
    this.menuController.enable(true).then();
    //fills the side menu with navigation options
    this.menuService.getAllBkePages();
  }
  ionViewWillLeave() {
    //disables the sidemenu when the user leaves the BKE page
    this.menuController.enable(false).then();
  }
}
