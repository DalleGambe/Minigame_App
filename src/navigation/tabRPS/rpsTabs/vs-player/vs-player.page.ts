import { Component } from '@angular/core';
import {MenuService} from '../../../../services/menu.service';
import {MenuController} from '@ionic/angular';
import {MinigameDataService} from '../../../../services/minigameData.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vs-player',
  templateUrl: './vs-player.page.html',
  styleUrls: ['./vs-player.page.scss'],
})
export class VsPlayerPage {

  constructor(public menuService: MenuService, public menuController: MenuController,
              public minigameData: MinigameDataService, public route: Router) {}
  ionViewWillEnter()
  {
    //enables the sidemenu when the user leaves the RPS vs player page
    this.menuController.enable(true).then();
    //fills the side menu with navigation options
    this.menuService.getAllRpsPages();
  }
  ionViewWillLeave() {
    //disables the sidemenu when the user leaves the RPS vs player page
    this.menuController.enable(false).then();
  }
  goToChooseName() {
    //set gamemode to vs player
    this.minigameData.setMinigameModeToVsAi(false);
    this.route.navigate(['tabs/tabRPS/rpsTabs/choose-name']).then();
  }
}
