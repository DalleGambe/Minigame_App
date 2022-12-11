import { Component } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.page.html',
  styleUrls: ['./startscreen.page.scss'],
})
export class StartscreenPage {

  constructor(public menuController: MenuController) {
    this.hideTabBar();
  }
  //disables the sidemenu on the page when the user enters
  ionViewWillEnter()
  {
    this.menuController.enable(false).then();
  }
  //enables the sidemenu when the user leaves the menu page
  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menuController.enable(true).then();
  }

  //hides the bar with tabs on this page
   hideTabBar = (): void => {
    const tabBar = document.getElementById('app-tab-bar');
    if (tabBar !== null) {
      tabBar.style.display = 'none';
    }
  };
}
