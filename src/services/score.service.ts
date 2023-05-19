import {Injectable} from '@angular/core';
import {ScoreRPS} from '../datatypes/scores/scoreRPS';
import {MinigameDataService} from './minigameData.service';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
//A service used for the score data
//While this will also be used in the future to back-up minigame data in firebase, at the moment due to time constraints this will only
//be used for the local score related things.
export class ScoreService {

  // The list of scores that will be displayed in the application.
  #scoreList: ScoreRPS[];
  #filteredScoreList: ScoreRPS[];

  //Current RPS score in minigame match
  currentScoreInRpsMatch: ScoreRPS;

  constructor(public minigameDataService: MinigameDataService, public storageService: StorageService) {
    this.fetchLocalScoreData();
    this.getCurrentScoreInRpsMatch();
  }

  getAllScores(mode: string | undefined): ScoreRPS[] {
   /* if(mode !== undefined)
    {
      //return a copy of the filtered scorelist
      return this.#filteredScoreList = this.#scoreList.sort();
    }*/
    //return the unfiltered scorelist
    return this.#scoreList;
  }

  //create rps score
  //code
  async createRpsScore() {
    const newRpsScore: ScoreRPS = {
      id: this.createUniqueId(),
      playerOneName: this.minigameDataService.playerOneName,
      playerTwoName: this.minigameDataService.playerTwoName,
      playerOneScore: this.minigameDataService.playerOneScore,
      playerTwoScore: this.minigameDataService.playerTwoScore,
      minigameName: 'Schaar, steen, papier!',
      minigameMode: this.minigameDataService.getCurrentGamemodeName(),
    };
    //set current score to the current one being played for
    await this.setLocalStoredScoreInRpsMatch(newRpsScore);
    //add current score to array
    this.#scoreList.push(newRpsScore);
    //save array in storage
    this.saveRPSScoreList(this.#scoreList);
  }

  //Fetches the local data of all the scores
  fetchLocalScoreData() {
    this.storageService.get('LocalScorebordData').then((value: ScoreRPS[]) => {
      //Check if the value is undefined or null
      if (value === undefined  || value === null) {
        //If it is, Create an empty array for the scorelist
        value = [];
      }
      this.#scoreList = value;
      console.log(value);
      console.log(this.#scoreList);
      this.saveRPSScoreList(value);
    });
  }

  //Creates a unique id for the score by generating a random number and getting the current date
  createUniqueId() {
    const max = 10000;
    const min = 1;
    const currentDate = Date.now();
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNumber);
    const uniqueId = currentDate.toString() + randomNumber.toString();
    console.log(uniqueId);
    return uniqueId;
  }

  //Update a currently existing score
  updateScore(score: ScoreRPS) {
    const scoreThatNeedsUpdating = this.#scoreList.find(s => s.id === score.id);
    if (scoreThatNeedsUpdating) {
      scoreThatNeedsUpdating.playerOneName = score.playerOneName;
      scoreThatNeedsUpdating.playerTwoName = score.playerTwoName;
      scoreThatNeedsUpdating.playerOneScore = score.playerOneScore;
      scoreThatNeedsUpdating.playerTwoScore = score.playerTwoScore;
      scoreThatNeedsUpdating.minigameName = score.minigameName;
      scoreThatNeedsUpdating.minigameMode = score.minigameMode;
    }
    this.saveRPSScoreList(this.#scoreList);
  }

  //Delete a score from the locally stored list
  removeScore(id: string) {
    //Filter list so that the score in question is no longer in it
    this.#scoreList = this.#scoreList.filter(score => score.id !== id);
    //Save list
    this.saveRPSScoreList(this.#scoreList);
  }

  saveRPSScoreList(scoreList: ScoreRPS[]) {
    this.storageService.set('LocalScorebordData', scoreList);
  }

  getCurrentScoreInRpsMatch() {
    this.setDisplayedScoreInRPSMatch();
    return this.currentScoreInRpsMatch;
  }

  //Sets the score in the current local storage
  setLocalStoredScoreInRpsMatch(score: ScoreRPS) {
    this.storageService.set('currentScoreInRPSMatch', score);
  }
  //Sets the currently displayed score in a match on a page
  setDisplayedScoreInRPSMatch() {
    this.storageService.get('currentScoreInRPSMatch').then((value: ScoreRPS) => {
      //If there is no data
      this.currentScoreInRpsMatch = value;
    });
  }
}
