import {Injectable} from '@angular/core';
import {MinigameDataService} from './minigameData.service';
import {ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import {ScoreService} from './score.service';
import {PostscreenComponent} from '../shared/postscreen/postscreen.component';

@Injectable({
  providedIn: 'root'
})
//A service exclusively used for the minigame rock paper scissors
export class RpsDataService {
  playerOneWeaponChoice: string;
  playerTwoWeaponChoice: string;
  numberThatNeedsToBeRolledForPistol = 10;
  pistolCheck: number;
  private isPistolRound = new BehaviorSubject(false);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  isPistolroundObservable = this.isPistolRound.asObservable();

  constructor(public minigameDataService: MinigameDataService,
              public modalController: ModalController, public scoreData: ScoreService) {
  }

  async pickWeaponChoice(weapon) {
    //Get the id from the button pressed
    let weaponChoice = weapon.el.id;
    if (weaponChoice === 'schaarPistoolRonde') {
      //change weapon choice to scissors if the scissors button was pressed during a pistol round
      weaponChoice = 'schaar';
    }
    //check which player's turn it is and add it to that current player
    //True means player one, false means player two.
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.minigameDataService.getCurrentPlayerTurn() === true ?
      this.playerOneWeaponChoice = weaponChoice : this.playerTwoWeaponChoice = weaponChoice;
    if (this.minigameDataService.getCurrentPlayerTurn() === true && this.minigameDataService.getCurrentGamemode() !== true) {
      this.minigameDataService.setPlayerTurn(false);
      //Reroll to see if player two gets the option of having a pistol
      this.rollPistolCheck();
    } else {
      //If it's vs ai
      if (this.minigameDataService.getCurrentGamemode() === true) {
        //set player turn to two
        this.minigameDataService.setPlayerTurn(false);
        //get ai choice
        this.playerTwoWeaponChoice = this.getAiWeaponChoice();
      }
      const roundResult = this.calculateRoundWinner(this.playerOneWeaponChoice, this.playerTwoWeaponChoice);
      //Updates/Sets the current matchscore in the current local storage
      this.scoreData.setLocalStoredScoreInRpsMatch(this.scoreData.getCurrentScoreInRpsMatch());
      //Updates the score in the scorelist
      this.scoreData.updateScore(this.scoreData.getCurrentScoreInRpsMatch());
      //Wait for postscreen
      await this.getPostScreen(roundResult);
    }
  }

  rollPistolCheck() {
    //Generate random number between 1 and max (10 in this case)
    this.pistolCheck = Math.floor(Math.random() * this.numberThatNeedsToBeRolledForPistol) + 1;
    //Checks if the value is equal to max while calling the next method on the object of isPistolRound
    // eslint-disable-next-line no-underscore-dangle
    this.isPistolRound.next(this.pistolCheck === this.numberThatNeedsToBeRolledForPistol);
  }

  getAiWeaponChoice() {
    //The ai will never have a pistol as option since it wouldn't be as fun.
    //generate weapon choice
    // Math.Floor will generate a random integer from 1 to 3:
    const rolledWeaponChoice = Math.floor(Math.random() * 3) + 1;
    //return weapon based on rolled choice
    switch (rolledWeaponChoice) {
      case 1:
        return 'schaar';
      case 2:
        return 'steen';
      case 3:
        return 'papier';
      default:
        return 'schaar';
    }
  }

  clearTemporaryRpsData() {
    this.minigameDataService.clearTemporaryData();
    this.scoreData.setLocalStoredScoreInRpsMatch(undefined);
  }

  async getPostScreen(roundResult: string) {
    //Open modal
      const modal = await this.modalController.create({
        component: PostscreenComponent,
        componentProps: {
          //Result of the round
          result: roundResult,
        },
        //Makes sure that the modal can't be dismissed by clicking outside of it
        backdropDismiss:false
      });
      console.log(roundResult);
      await modal.present();
  }

  calculateRoundWinner(playerOneWeaponChoice, playerTwoWeaponChoice) {
    switch (playerOneWeaponChoice + playerTwoWeaponChoice) {
      case 'schaarschaar':
      case 'steensteen':
      case 'papierpapier':
      case 'pistoolpistool':
        return 'Gelijkspel!';
      case 'schaarsteen':
      case 'schaarpistool':
      case 'steenpapier':
      case 'steenpistool':
      case 'papierschaar':
      case 'papierpistool:':
        this.scoreData.getCurrentScoreInRpsMatch().playerTwoScore++;
        return this.scoreData.currentScoreInRpsMatch.playerTwoName + ' heeft deze ronde gewonnen!';
      default:
        this.scoreData.getCurrentScoreInRpsMatch().playerOneScore++;
        return this.scoreData.currentScoreInRpsMatch.playerOneName + ' heeft deze rond gewonnen!';
    }
  }
}

