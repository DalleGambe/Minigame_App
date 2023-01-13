import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MinigameDataService} from '../../../services/minigameData.service';
import {RpsDataService} from '../../../services/rpsData.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.scss'],
})
export class RpsComponent implements OnInit, OnDestroy {
  isPistolRound: boolean;
  private isPistolRoundSub: Subscription;
  constructor(public minigameData: MinigameDataService, public rpsData: RpsDataService) {
  }

   ngOnInit() {
     //When the observable sends a new value, the callback function inside subscribe() will be called
     // with the new value as its parameter
     this.isPistolRoundSub = this.rpsData.isPistolroundObservable.subscribe((isPistolRound) => {
       //assigning new value to isPistolRound
       this.isPistolRound = isPistolRound;
     });
  }
  //  Unsubscribing from the subscription to prevent memory leaks
  ngOnDestroy() {
    this.isPistolRoundSub.unsubscribe();
  }
}
