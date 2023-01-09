import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginHubPageRoutingModule } from './login-hub-routing.module';

import { LoginHubPage } from './login-hub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginHubPageRoutingModule
  ],
  declarations: [LoginHubPage]
})
export class LoginHubPageModule {}
