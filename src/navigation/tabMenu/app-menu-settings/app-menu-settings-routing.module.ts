import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMenuSettingsPage } from './app-menu-settings.page';

const routes: Routes = [
  {
    path: '',
    component: AppMenuSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMenuSettingsPageRoutingModule {}
