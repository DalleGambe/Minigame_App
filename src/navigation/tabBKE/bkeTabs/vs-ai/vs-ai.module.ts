import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VsAiPageRoutingModule } from './vs-ai-routing.module';

import { VsAiPage } from './vs-ai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VsAiPageRoutingModule
  ],
  declarations: [VsAiPage]
})
export class VsAiPageModule {}
