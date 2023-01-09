import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpsArenaPage } from './rps-arena.page';

const routes: Routes = [
  {
    path: '',
    component: RpsArenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RpsArenaPageRoutingModule {}
