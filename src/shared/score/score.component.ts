import {Component, Input, OnInit} from '@angular/core';
import {ScoreService} from '../../services/scoreService';
import {ScoreRPS} from '../../datatypes/scores/scoreRPS';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {

  @Input() score: ScoreRPS;
  constructor(public scoreService: ScoreService) { }

  ngOnInit() {}

}
