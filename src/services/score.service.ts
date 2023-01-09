import { Injectable } from '@angular/core';
import {ScoreRPS} from '../datatypes/scores/scoreRPS';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  // The list of task that will be displayed in the application.
  #scoreList: ScoreRPS[] = [];
  // The id for each new task.
  #id = 0;


  constructor() {
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
}
