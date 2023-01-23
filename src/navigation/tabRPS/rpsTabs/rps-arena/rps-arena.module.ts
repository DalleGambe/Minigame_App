import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpsArenaPageRoutingModule } from './rps-arena-routing.module';

import { RpsArenaPage } from './rps-arena.page';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RpsArenaPageRoutingModule,
        SharedModule,
    ],
  declarations: [RpsArenaPage],
})
export class RpsArenaPageModule {}
