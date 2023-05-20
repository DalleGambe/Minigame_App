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
        name: 'TchaikoDb.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
/*
          this.getFakeData();
*/
        });
    });
  }
  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchScoreList(): Observable<ScoreRPS[]> {
    return this.scoreList.asObservable();
  }
/*  // Render fake data
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
  }*/
  // Get list
  getEntitiesFromTable<T>(tableName: string): Promise<void> {
    return this.storage
      .executeSql(`SELECT * FROM ${tableName}`, [])
      .then(res => {
        const items: T[] = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            items.push({
              id: res.rows.item(i).id,
              ...res.rows.item(i)
            } as T);
          }
        }
        this.scoreList.next(items);
      });
  }

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
  addObjectToDb<T>(object: T, tableName: string) {
    const fieldNames = Object.keys(object).join(', ');
    const placeholders = Object.keys(object).fill('?').join(', ');
    const data = Object.values(object);
    const query = `INSERT INTO ${tableName} (${fieldNames}) VALUES (${placeholders})`;
    return this.storage
      .executeSql(query, data)
      .then(() => {
        this.getEntitiesFromTable(tableName);
      });
  }

  // Get single object
  getScore(id): Promise<ScoreRPS> {
    return this.storage.executeSql('SELECT * FROM ScoreTable WHERE id = ?', [id]).then(res => ({
        id: res.rows.item(0).id,
        playerOneName: res.rows.item(0).playerOneName,
        playerTwoName: res.rows.item(0).playerTwoName,
        playerOneScore: res.rows.item(0).playerOneScore,
        playerTwoScore: res.rows.item(0).playerTwoScore,
        minigameName: res.rows.item(0).minigameName,
        minigameMode: res.rows.item(0).minigameMode
      }));
  }
  // Update
  updateScore(id, score: ScoreRPS) {
    const data = [...Object.values(score)];
    return this.storage.executeSql(`UPDATE ScoreTable SET artist_name = ?, song_name = ? WHERE id = ${id}`, data)
      .then(result => {
        this.getScoreList();
      });
  }
  // Delete
  deleteScore(id) {
    return this.storage.executeSql('DELETE FROM ScoreTable WHERE id = ?', [id])
      .then(_ => {
        this.getScoreList();
      });
  }
}
