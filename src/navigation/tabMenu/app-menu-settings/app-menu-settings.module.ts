import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMenuSettingsPageRoutingModule } from './app-menu-settings-routing.module';

import { AppMenuSettingsPage } from './app-menu-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMenuSettingsPageRoutingModule
  ],
  declarations: [AppMenuSettingsPage]
})
export class AppMenuSettingsPageModule {}
