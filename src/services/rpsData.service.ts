import {Injectable} from '@angular/core';
import {MinigameDataService} from './minigameData.service';

@Injectable({
  providedIn: 'root'
})
export class RpsDataService {
  weaponChoices: [{ scissors }, { rock }, { paper }, { pistol }];
  playerOneWeaponChoice: any;
  playerTwoWeaponChoice: any;
  max = 10;
  pistolCheck = this.rollPistolCheck();
  constructor(public minigameDataService: MinigameDataService) {
  }

  /*
    async waitForButtonPress() {
      const promise = new Promise((resolve) => {
        document.getElementById('rock').addEventListener('click', resolve);
      });
      await promise;
      console.log('BIEFTUKJES JAAA');
    }
  */

  pickWeaponChoice(weapon) {
    //Get the id from the button pressed
    let weaponChoice = weapon.el.id;
    if (weaponChoice === 'scissorsPistolRound') {
      //change weapon choice to scissors if the scissors button was pressed during a pistol round
      weaponChoice = 'scissors';
    }
    //check if the weapon chosen is valid
    /*  console.log(this.weaponChoices);
      if (this.weaponChoices.includes(weapon)) {*/
    //if it is, check which player's turn it is and add it to that current player
    //True means player one, false means player two.
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.minigameDataService.getCurrentPlayerTurn() === true ?
      this.playerOneWeaponChoice = weapon : this.playerTwoWeaponChoice = weapon;
    if (this.minigameDataService.getCurrentPlayerTurn() === true && this.minigameDataService.getCurrentGamemode() !== true) {
      this.minigameDataService.setPlayerTurn(false);
      //reroll pistolcheck and rerender component if needed
    } else {
      //If it's vs ai
      if(this.minigameDataService.getCurrentGamemode() === true)
      {
        //set player turn to two
        this.minigameDataService.setPlayerTurn(false);
        //get ai choice
      }
    const roundResult = this.calculateRoundWinner(this.playerOneWeaponChoice, this.playerTwoWeaponChoice);
    this.getPostScreen(roundResult);
    }
  }

  isPistolRound() {
    return this.pistolCheck === this.max;
  }
   rollPistolCheck() {
    return Math.floor(Math.random() * this.max);
  }
  getAiWeaponChoice() {
    //The ai will never have a pistol as option since it wouldn't be as fun.
    //generate weapon choice
    //return weapon choice
  }

  getPostScreen(roundResult)
  {
    //reset turn
    /*this.minigameDataService.setPlayerTurn(true);*/
    //return modal
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

