import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoloModePage } from './solo-mode.page';

const routes: Routes = [
  {
    path: '',
    component: SoloModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoloModePageRoutingModule {}
