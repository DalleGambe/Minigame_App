import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VsAiPage } from './vs-ai.page';

const routes: Routes = [
  {
    path: '',
    component: VsAiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VsAiPageRoutingModule {}
