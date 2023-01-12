import {Component, Input, OnInit} from '@angular/core';
import {MinigameDataService} from '../../../services/minigameData.service';
import {RpsDataService} from '../../../services/rpsData.service';


@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.scss'],
})
export class RpsComponent implements OnInit {

  constructor(public minigameData: MinigameDataService, public rpsData: RpsDataService) {
  }

   ngOnInit() {
  }
}
