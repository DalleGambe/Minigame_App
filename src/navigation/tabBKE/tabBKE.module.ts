import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabBKEPage } from './tabBKE.page';
import { ExploreContainerComponentModule } from '../../app/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tabBKE-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
  declarations: [TabBKEPage]
})
export class TabBKEModule {}
