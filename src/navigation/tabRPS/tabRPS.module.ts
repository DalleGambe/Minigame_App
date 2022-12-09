import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabRPSPage } from './tabRPS.page';
import { ExploreContainerComponentModule } from '../../app/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tabRPS-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    SharedModule
  ],
  declarations: [TabRPSPage]
})
export class TabRPSPageModule {}
