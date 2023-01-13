import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//This service will be used for data that could be used for ANY minigame
export class MinigameDataService {
  //playernames from choose name
  playerOneName: string;
  playerTwoName: string;
  //if mode is vs ai or vs player true = ai, false = vs player
  vsAi: boolean;
  //Current player turn
  isPlayerOneTurn: true;
  //Current player one score
  playerOneScore: number;
  //Current player two score
  playerTwoScore: number;
  constructor() {
    this.setBeginningNewGame();
  }
  setMinigameModeToVsAi(value)
  {
  this.vsAi = value;
  }
  setPlayernames(nameOne, nameTwo)
  {
    this.playerOneName = nameOne;
    this.playerTwoName = nameTwo;
  }
  //Executes at the start of every new round
  setBeginningNewGame()
  {
    //set player turn to player one
    this.setPlayerTurn(true);
    //set scores to 0
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }
  clearTemporaryData()
  {
    this.playerOneName = '';
    this.playerTwoName = '';
    this.setBeginningNewGame();
  }

  //using a boolean instead of an array because only two players are present in the minigames at most.
  setPlayerTurn(playerTurn)
  {
    //sets player turn to given value
  this.isPlayerOneTurn = playerTurn;
  }
  getCurrentPlayerTurn()
  {
    return this.isPlayerOneTurn;
  }

  getCurrentGamemode() {
    return this.vsAi;
  }

  getCurrentGamemodeName() {
    if(this.getCurrentGamemode() === true){
      return 'Vs Ai';
    }
    return 'Vs Speler';
  }
}
