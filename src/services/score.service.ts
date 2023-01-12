import { Injectable } from '@angular/core';
import {ScoreRPS} from '../datatypes/scores/scoreRPS';
import {MinigameDataService} from './minigameData.service';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  // The list of scores that will be displayed in the application.
  #scoreList: ScoreRPS[] = [];
  // The id for each new score.
  #id = 0;


  constructor(public minigameDataService: MinigameDataService) {
    // Uncomment to generate a collection of demo task for testing the UI.
    for (let i = 0; i < 1; i++) {
      this.#scoreList.push({
        playerOneName: 'Justin',
        playerTwoName: 'Robert',
        totalScore: '3-1',
        title: 'Justin vs Robert 3 - 1',
        id: this.#id,
      });
      this.#id++;
    }
    this.#scoreList.push({
      playerOneName: 'Bob',
      playerTwoName: 'Jessica',
      totalScore: '4-5',
      title: 'Bob vs Jessica 4 - 5',
      id: this.#id,
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
