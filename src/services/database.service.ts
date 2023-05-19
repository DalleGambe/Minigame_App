import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import {ScoreRPS} from '../datatypes/scores/scoreRPS';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  scoreList = new BehaviorSubject([]);
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'positronx_db.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
    });
  }
  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchScoreList(): Observable<ScoreRPS[]> {
    return this.scoreList.asObservable();
  }
  // Render fake data
  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql',
      {responseType: 'text'}
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getScoreList();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }
  // Get list
  getScoreList(){
    return this.storage.executeSql('SELECT * FROM ScoreTable', []).then(res => {
      const scoreCollection: ScoreRPS[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          scoreCollection.push({
            id: res.rows.item(i).id,
            playerOneName: res.rows.item(i).playerOneName,
            playerTwoName: res.rows.item(i).playerTwoName,
            playerOneScore: res.rows.item(i).playerOneScore,
            playerTwoScore: res.rows.item(i).playerTwoScore,
            minigameName: res.rows.item(i).minigameName,
            minigameMode: res.rows.item(i).minigameMode,
          });
        }
      }
      this.scoreList.next(scoreCollection);
    });
  }
  // Add
 /* addScore(ScoreRPS Score) {
    return this.storage.executeSql('INSERT INTO ScoreTable (artist_name, song_name) VALUES (?, ?)', data)
      .then(res => {
        this.getScoreList();
      });
  }*/

  // Get single object
  getScore(id): Promise<ScoreRPS> {
    return this.storage.executeSql('SELECT * FROM ScoreTable WHERE id = ?', [id]).then(res => {
      return {
        id: res.rows.item(0).id,
        artist_name: res.rows.item(0).artist_name,
        song_name: res.rows.item(0).song_name
      }
    });
  }
  // Update
  updateScore(id, song: ScoreRPS) {
    let data = [song.artist_name, song.song_name];
    return this.storage.executeSql(`UPDATE ScoreTable SET artist_name = ?, song_name = ? WHERE id = ${id}`, data)
      .then(data => {
        this.getScoreList();
      })
  }
  // Delete
  deleteScore(id) {
    return this.storage.executeSql('DELETE FROM ScoreTable WHERE id = ?', [id])
      .then(_ => {
        this.getScoreList();
      });
  }
}
