import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabFroggyTapPage } from './tabFroggyTap.page';
import { ExploreContainerComponentModule } from '../../app/explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tabFroggyTap-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [TabFroggyTapPage]
})
export class Tab1PageModule {}
