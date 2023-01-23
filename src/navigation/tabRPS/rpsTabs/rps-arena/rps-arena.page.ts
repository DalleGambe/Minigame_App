import {Component, OnInit} from '@angular/core';
import {MinigameDataService} from '../../../../services/minigameData.service';
import {RpsDataService} from '../../../../services/rpsData.service';
import {ModalController, NavController} from '@ionic/angular';
import {ScoreService} from '../../../../services/score.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rps-arena',
  templateUrl: './rps-arena.page.html',
  styleUrls: ['./rps-arena.page.scss'],
})
export class RpsArenaPage implements OnInit {
  constructor(public minigameData: MinigameDataService, public rpsData: RpsDataService,
              private modalController: ModalController, private navController: NavController, public scoreData: ScoreService,
              public route: Router) {
  }
  goToRpsMenu() {
    this.navController.navigateRoot('/tabs/tabRPS').then();
    //close active modal
    this.modalController.dismiss();
  }

  ngOnInit(): void {
    //See if player one may get a pistol as option
    this.rpsData.rollPistolCheck();
  }

  newGame() {
    //reset everything
    this.rpsData.clearTemporaryRpsData();
    //Go to choosename page
    this.route.navigate(['tabs/tabRPS/rpsTabs/choose-name']).then();
    this.modalController.dismiss();
  }

  nextRpsRound() {
    //reset player turn
    this.minigameData.setPlayerTurn(true);
    //See if player one may get a pistol as option
    this.rpsData.rollPistolCheck();
    //close active modal
    this.modalController.dismiss();
  }
}
