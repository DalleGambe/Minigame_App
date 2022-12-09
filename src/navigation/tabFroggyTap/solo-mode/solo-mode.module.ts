import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoloModePageRoutingModule } from './solo-mode-routing.module';

import { SoloModePage } from './solo-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoloModePageRoutingModule
  ],
  declarations: [SoloModePage]
})
export class SoloModePageModule {}
