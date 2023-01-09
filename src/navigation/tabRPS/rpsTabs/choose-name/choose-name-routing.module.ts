import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseNamePage } from './choose-name.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseNamePageRoutingModule {}
