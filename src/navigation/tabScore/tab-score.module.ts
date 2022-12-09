import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabScorePageRoutingModule } from './tab-score-routing.module';

import { TabScorePage } from './tab-score.page';
import {ScoreComponent} from '../../shared/score/score.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabScorePageRoutingModule
  ],
  declarations: [TabScorePage, ScoreComponent]
})
export class TabScorePageModule {}
