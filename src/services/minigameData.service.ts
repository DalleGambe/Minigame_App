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
  constructor() { }

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
    this.vsAi = true;
    this.playerOneName = '';
    this.playerTwoName = '';
  }
}
