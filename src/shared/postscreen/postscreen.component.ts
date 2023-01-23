import {Component, Input, OnInit} from '@angular/core';
import {ScoreService} from '../../services/score.service';
import {RpsDataService} from '../../services/rpsData.service';
import {ModalController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {MinigameDataService} from '../../services/minigameData.service';


@Component({
  selector: 'app-postscreen',
  templateUrl: './postscreen.component.html',
  styleUrls: ['./postscreen.component.scss'],
})
export class PostscreenComponent implements OnInit {
  @Input() result: string;

  constructor(public scoreData: ScoreService, public rpsData: RpsDataService, public route: Router,
              public modalController: ModalController, public minigameData: MinigameDataService, public navController: NavController) {
    console.log(this.result);
  }

  ngOnInit() {}
  goToRpsMenu() {
    this.navController.navigateRoot('/tabs/tabRPS').then();
    //close active modal
    this.modalController.dismiss();
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
