import {Component} from '@angular/core';
import {Filter} from '../../datatypes/filters/filter';
import {FilterMinigames} from '../../datatypes/filters/filterMinigames';
import {FilterModes} from '../../datatypes/filters/filterModes';
import {ScoreService} from '../../services/score.service';
import {FilterScoresBasedOnDate} from '../../datatypes/filters/filterScoresBasedOnDate';

@Component({
  selector: 'app-tab-score',
  templateUrl: './tab-score.page.html',
  styleUrls: ['./tab-score.page.scss'],
})

export class TabScorePage{

  // The filters are defined in an enum, the enum must first be converted to an
  // array because enums aren't iterable.
  filtersState = Object.values(Filter) as Filter[];
  selectedStateFilter = this.filtersState[0];

  filtersMinigames = Object.values(FilterMinigames) as FilterMinigames[];
  selectedMinigameFilter = this.filtersMinigames[0];

  filterModes = Object.values(FilterModes) as FilterModes[];
  selectedModeFilter = this.filterModes[0];

  filterScoresBasedOnDate = Object.values(FilterScoresBasedOnDate) as FilterScoresBasedOnDate[];
  selectedDateFilter = this.filterScoresBasedOnDate[0];

  constructor(public scoreService: ScoreService) {
  }
}
