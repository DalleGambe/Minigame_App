import {Component} from '@angular/core';
import {MinigameDataService} from '../../../../services/minigameData.service';
import {RpsDataService} from '../../../../services/rpsData.service';

@Component({
  selector: 'app-rps-arena',
  templateUrl: './rps-arena.page.html',
  styleUrls: ['./rps-arena.page.scss'],
})
export class RpsArenaPage {
  constructor(public minigameData: MinigameDataService, public rpsData: RpsDataService) {
    /*this.startGame();*/
  }

/* async startGame() {
    //Check if player somehow got here by cheating through url
    if (this.minigameData.playerOneName && this.minigameData.playerTwoName !== undefined) {
      //await for player one to press a button
      await this.rpsData.waitForButtonPress();
      //get  player one's weapon choice
      this.rpsData.getPlayerOneWeaponChoice();
      //set turn to player two
      //True = player one, False = player two.
      this.minigameData.setPlayerTurn(false);
      //Check what mode it is
      const currentGamemode = this.minigameData.getCurrentGamemode();
      //if it's vs player
      //If false, the gamemode is set Vs Player. Otherwise, the currently played gamemode is Vs Ai.
      if (currentGamemode === false) {
        //Give players time to hand over phone by making the screen black
        //code
        //Wait for second player to pick a weapon
        await this.rpsData.waitForButtonPress();
        //get  player two's weapon choice
        this.rpsData.getPlayerTwoWeaponChoice();
      } else {
        //Wait for second player to pick a weapon
        await this.rpsData.waitForButtonPress();
        //get  player two's weapon choice
        this.rpsData.getPlayerTwoWeaponChoice();
        //Else if it's vs ai, set screen to black with the following text displaying
        // "Bedankt voor je ogen te sluiten, de ai (naam van speler 2) is nu aan het kiezen!"
        //get ai weaponchoice
      }
      //Compare both weapons to see who comes out on top
      //Function
      //Declare a winner
      //Function
      //Display post screen with 3 options to choose from: "Nieuwe ronde","Nieuw spel","Terug naar het menu".
      //await function
    } else {
      //Redirect to choosename menu
    }
  }*/
}
