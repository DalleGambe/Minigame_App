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
  #scoreList: ScoreRPS[] = [];

  //Current RPS score in minigame match
  currentScoreInRPSMatch: ScoreRPS;

  constructor(public minigameDataService: MinigameDataService, public storageService: StorageService) {
    this.fetchLocalScoreData();
  }

  getAllScores(): ScoreRPS[] {
    return this.#scoreList;
  }

  //create rps score
  //code
  createRpsScore() {
    const newRpsScore: ScoreRPS = {
      id: this.createUniqueId(),
      playerOneName: this.minigameDataService.playerOneName,
      playerTwoName: this.minigameDataService.playerTwoName,
      playerOneScore: this.minigameDataService.playerOneScore,
      playerTwoScore: this.minigameDataService.playerTwoScore,
      minigameName: 'Schaar, steen, papier!',
      minigameMode: this.minigameDataService.getCurrentGamemodeName(),
    };
    //set current score to this recent one
    this.setCurentScoreInRPSMatch(newRpsScore);
    //save in storage
    //get the currently stored Array of data
        //add current score to array
        this.#scoreList.push(newRpsScore);
        //save array in storage
        this.saveRPSScoreList(this.#scoreList);
  }

  //Fetches the local data of all the scores
  fetchLocalScoreData() {
    this.storageService.get('LocalScorebordData').then((value: ScoreRPS[]) => {
      //If there is no data
      if(value === undefined)
      {
        //Create empty scorelist
        value = [];
        this.saveRPSScoreList(value);
      }
      this.#scoreList = value;
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

  updateScore(score: ScoreRPS)
  {
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

  removeScore(id: string) {
    this.#scoreList = this.#scoreList.filter(score => score.id !== id);
    this.saveRPSScoreList(this.#scoreList);
  }
  saveRPSScoreList(scoreList: ScoreRPS[])
  {
    this.storageService.set('LocalScorebordData', scoreList);
  }

  getCurrentScoreInRpsMatch()
  {
    this.storageService.get('currentScoreInRPSMatch').then((value: ScoreRPS) => {
      //If there is no data
      this.currentScoreInRPSMatch = value;
    });
    return this.currentScoreInRPSMatch;
  }

  setCurentScoreInRPSMatch(score: ScoreRPS) {
    this.storageService.set('currentScoreInRPSMatch', score);
  }
}
