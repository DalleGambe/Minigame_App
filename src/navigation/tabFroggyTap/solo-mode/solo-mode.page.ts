import { Component } from '@angular/core';
import {MenuService} from '../../../services/menu.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-solo-mode',
  templateUrl: './solo-mode.page.html',
  styleUrls: ['./solo-mode.page.scss'],
})
export class SoloModePage {

  constructor(public menuService: MenuService, public menuController: MenuController) {}
  ionViewWillEnter()
  {
    //enables the sidemenu when the user leaves the Froggy Tap solo mode page
    this.menuController.enable(true).then();
    //fills the side menu with navigation options
    this.menuService.getAllFroggyTapPages();
  }
  ionViewWillLeave() {
    //disables the sidemenu when the user leaves the Froggy Tap solo mode page
    this.menuController.enable(false).then();
  }
}
