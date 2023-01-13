import {Component, OnInit} from '@angular/core';
import {MinigameDataService} from '../../../../services/minigameData.service';
import {RpsDataService} from '../../../../services/rpsData.service';
import {ModalController, NavController} from '@ionic/angular';
import {ScoreService} from '../../../../services/score.service';

@Component({
  selector: 'app-rps-arena',
  templateUrl: './rps-arena.page.html',
  styleUrls: ['./rps-arena.page.scss'],
})
export class RpsArenaPage implements OnInit {
  constructor(public minigameData: MinigameDataService, public rpsData: RpsDataService,
              private modalController: ModalController, private navController: NavController, public scoreData: ScoreService) {
  }
  goToRpsMenu() {
    this.navController.navigateRoot('/tabs/tabRPS').then();
    //close active modal
    this.modalController.dismiss();
  }

  ngOnInit(): void {
    //See if player one may get a pistol as option
    this.rpsData.rollPistolCheck();
    //Generate a score and add it to the list scorelist
    this.scoreData.createRpsScore();
  }

  newGame() {
    //code
  }

  nextRpsRound() {
    //code
  }
}
