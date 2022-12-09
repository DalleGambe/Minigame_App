import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VsPlayerPage } from './vs-player.page';

const routes: Routes = [
  {
    path: '',
    component: VsPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VsPlayerPageRoutingModule {}
