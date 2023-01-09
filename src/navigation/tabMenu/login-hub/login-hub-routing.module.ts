import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginHubPage } from './login-hub.page';

const routes: Routes = [
  {
    path: '',
    component: LoginHubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginHubPageRoutingModule {}
