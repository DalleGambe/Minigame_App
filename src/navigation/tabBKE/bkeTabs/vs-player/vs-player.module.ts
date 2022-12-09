import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VsPlayerPageRoutingModule } from './vs-player-routing.module';

import { VsPlayerPage } from './vs-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VsPlayerPageRoutingModule
  ],
  declarations: [VsPlayerPage]
})
export class VsPlayerPageModule {}
