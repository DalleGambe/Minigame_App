import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartscreenPage } from './startscreen.page';

const routes: Routes = [
  {
    path: '',
    component: StartscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartscreenPageRoutingModule {}
