import {Component} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-tab-rps',
  templateUrl: 'tabRPS.page.html',
  styleUrls: ['tabRPS.page.scss']
})
export class TabRPSPage {


  constructor(public menuService: MenuService, public menuController: MenuController) {
  }

  ionViewWillEnter() {
    //enables the sidemenu when the user leaves the RPS page
    this.menuController.enable(true).then();
    //fills the side menu with navigation options
    this.menuService.getAllRpsPages();
  }
  ionViewWillLeave() {
    //disables the sidemenu when the user leaves the RPS page
    this.menuController.enable(false).then();
  }
}
