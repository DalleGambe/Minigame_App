import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabRPSPage } from './tabRPS.page';
import { ExploreContainerComponentModule } from '../../app/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tabRPS-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
  declarations: [TabRPSPage]
})
export class TabRPSPageModule {}
