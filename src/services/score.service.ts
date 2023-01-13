import { Injectable } from '@angular/core';
import {ScoreRPS} from '../datatypes/scores/scoreRPS';
import {MinigameDataService} from './minigameData.service';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  // The list of scores that will be displayed in the application.
  #scoreList: ScoreRPS[] = [];


  constructor(public minigameDataService: MinigameDataService) {
    // Uncomment to generate a collection of demo task for testing the UI.
    for (let i = 0; i < 1; i++) {
      this.#scoreList.push({
        id: 'eafdsfsdfesfesfd2683',
        playerOneName: 'Justin',
        playerTwoName: 'Robert',
        playerOneScore: 3,
        playerTwoScore: 1,
        minigameName: 'RPS',
        minigameMode: 'Vs Player'
      });
    }
    this.#scoreList.push({
      id: 'sdfsdfvcbnghtgf36',
      playerOneName: 'Bob',
      playerTwoName: 'Jessica',
      playerOneScore: 4,
      playerTwoScore: 5,
      minigameName: 'RPS',
      minigameMode: 'Vs Ai'
    });
  }

  getAllScores(): ScoreRPS[] {
    return this.#scoreList;
  }
  //create rps score
  //code
  //modify rps score
  //code
  //upload rps score to local storage
  //code
  //clear current rps score data
  //code
  //remove rps score from scorebord and local storage
  //code
}
