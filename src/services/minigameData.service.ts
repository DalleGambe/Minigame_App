import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinigameDataService {
  //playernames from choose name
  playerOneName: string;
  playerTwoName: string;
  //if mode is vs ai or vs player true = ai, false = vs player
  vsAi: boolean;
  //Current player turn
  isPlayerOneTurn: true;
  constructor() {
    this.isPlayerOneTurn = true;
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
  clearTemporaryData()
  {
    //Get stored mode
    this.vsAi = true;
    this.playerOneName = '';
    this.playerTwoName = '';
    this.isPlayerOneTurn = true;
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
}
