import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabBKEPage } from './tabBKE.page';

const routes: Routes = [
  {
    path: '',
    component: TabBKEPage,
  },
  {
    path: 'vs-ai',
    loadChildren: () => import('./bkeTabs/vs-ai/vs-ai.module').then( m => m.VsAiPageModule)
  },
  {
    path: 'vs-player',
    loadChildren: () => import('./bkeTabs/vs-player/vs-player.module').then( m => m.VsPlayerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
