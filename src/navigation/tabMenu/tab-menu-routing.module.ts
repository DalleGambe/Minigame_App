import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMenuPage } from './tab-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TabMenuPage
  },
  {
    path: 'login-hub',
    loadChildren: () => import('./login-hub/login-hub.module').then(m => m.LoginHubPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMenuPageRoutingModule {}
