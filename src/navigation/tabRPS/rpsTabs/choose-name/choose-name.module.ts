import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseNamePageRoutingModule } from './choose-name-routing.module';

import { ChooseNamePage } from './choose-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseNamePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChooseNamePage]
})
export class ChooseNamePageModule {}
