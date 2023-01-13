import {Injectable} from '@angular/core';
import {MinigameDataService} from './minigameData.service';
import {ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//A service exclusively used for the minigame rock paper scissors
export class RpsDataService {
  playerOneWeaponChoice: string;
  playerTwoWeaponChoice: string;
  max = 10;
  pistolCheck: number;
  private isPistolRound = new BehaviorSubject(false);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  isPistolroundObservable = this.isPistolRound.asObservable();
  constructor(public minigameDataService: MinigameDataService, public modalController: ModalController) {
  }

  pickWeaponChoice(weapon) {
    //Get the id from the button pressed
    let weaponChoice = weapon.el.id;
    if (weaponChoice === 'scissorsPistolRound') {
      //change weapon choice to scissors if the scissors button was pressed during a pistol round
      weaponChoice = 'scissors';
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
      //Check i
      this.getPostScreen(roundResult);
    }
  }

  rollPistolCheck() {
    //Generate random number between 1 and max (10 in this case)
    this.pistolCheck = Math.floor(Math.random() * this.max)+1;
    //Checks if the value is equal to max while calling the next method on the object of isPistolRound
    // eslint-disable-next-line no-underscore-dangle
    this.isPistolRound.next(this.pistolCheck === this.max);
  }
  getAiWeaponChoice() {
    //The ai will never have a pistol as option since it wouldn't be as fun.
    //generate weapon choice
    // Math.Floor will generate a random integer from 1 to 3:
    const rolledWeaponChoice = Math.floor(Math.random() * 3) + 1;
    //return weapon based on rolled choice
    switch (rolledWeaponChoice) {
      case 1:
        return 'scissors';
      case 2:
        return 'rock';
      case 3:
        return 'paper';
      default:
        return 'scissors';
    }
  }

  getPostScreen(roundResult) {
    //reset turn
    /*this.minigameDataService.setPlayerTurn(true);*/
  }

  calculateRoundWinner(playerOneWeaponChoice, playerTwoWeaponChoice) {
    switch (playerOneWeaponChoice + playerTwoWeaponChoice) {
      case 'scissorsscissors':
      case 'rockrock':
      case 'paperpaper':
      case 'pistolpistol':
        //update score
        return 'Draw';
      case 'scissorsrock':
      case 'scissorspistol':
      case 'rockpaper':
      case 'rockpistol':
      case 'paperscissors':
      case 'paperpistol:':
        //update score
        return 'Lose';
      default:
        //update score
        return 'Win';
    }
  }
}

