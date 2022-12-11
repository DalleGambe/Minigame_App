import { Component } from '@angular/core';
import {MenuService} from '../../../../services/menu.service';
import {MenuController} from '@ionic/angular';


@Component({
  selector: 'app-vs-ai',
  templateUrl: './vs-ai.page.html',
  styleUrls: ['./vs-ai.page.scss'],
})
export class VsAiPage {

  constructor(public menuService: MenuService, public menuController: MenuController) {}
  ionViewWillEnter()
  {
    //enables the sidemenu when the user leaves the RPS vs ai page
    this.menuController.enable(true).then();
    //fills the side menu with navigation options
    this.menuService.getAllRpsPages();
  }
  ionViewWillLeave() {
    //disables the sidemenu when the user leaves the RPS vs ai page
    this.menuController.enable(false).then();
  }
}
