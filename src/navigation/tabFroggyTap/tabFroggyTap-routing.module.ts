import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabFroggyTapPage } from './tabFroggyTap.page';

const routes: Routes = [
  {
    path: '',
    component: TabFroggyTapPage,
  },
  {
    path: 'solo-mode',
    loadChildren: () => import('./solo-mode/solo-mode.module').then( m => m.SoloModePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
