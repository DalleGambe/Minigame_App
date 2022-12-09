import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabRPSPage } from './tabRPS.page';

const routes: Routes = [
  {
    path: '',
    component: TabRPSPage,
  },
  {
    path: 'vs-player',
    loadChildren: () => import('./rpsTabs/vs-player/vs-player.module').then( m => m.VsPlayerPageModule)
  },
  {
    path: 'vs-ai',
    loadChildren: () => import('./rpsTabs/vs-ai/vs-ai.module').then( m => m.VsAiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
