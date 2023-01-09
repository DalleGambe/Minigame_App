import {Component, Input, OnInit} from '@angular/core';
import {MinigameDataService} from '../../../services/minigameData.service';


@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.scss'],
})
export class RpsComponent implements OnInit {

  max = 10;
  pistolCheck = Math.floor(Math.random() * this.max);
  constructor(public minigameData: MinigameDataService) {
  }

  ngOnInit() {
  }

  showPistolOption() {
    return this.pistolCheck === this.max;
  }
}
