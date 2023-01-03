import { Component } from '@angular/core';
import {MenuService} from '../../../../services/menu.service';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {MinigameDataService} from '../../../../services/minigameData.service';

@Component({
  selector: 'app-vs-ai',
  templateUrl: './vs-ai.page.html',
  styleUrls: ['./vs-ai.page.scss'],
})
export class VsAiPage {
  constructor(public menuService: MenuService, public menuController: MenuController, private route: Router,
              public minigameData: MinigameDataService) {}
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

  goToChooseName() {
    this.minigameData.setMinigameModeToVsAi(true);
    this.route.navigate(['tabs/tabRPS/rpsTabs/choose-name']).then();
  }
}
