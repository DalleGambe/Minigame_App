import { Component } from '@angular/core';
import {MenuService} from '../../../../services/menu.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-vs-player',
  templateUrl: './vs-player.page.html',
  styleUrls: ['./vs-player.page.scss'],
})
export class VsPlayerPage {

  constructor(public menuService: MenuService, public menuController: MenuController) {}
  ionViewWillEnter()
  {
    //enables the sidemenu when the user leaves the BKE vs player page
    this.menuController.enable(true).then();
    //fills the side menu with navigation options
    this.menuService.getAllBkePages();
  }
  ionViewWillLeave() {
    //disables the sidemenu when the user leaves the BKE vs player page
    this.menuController.enable(false).then();
  }
}
