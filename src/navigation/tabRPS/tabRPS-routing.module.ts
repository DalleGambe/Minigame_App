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
  },  {
    path: 'choose-name',
    loadChildren: () => import('./rpsTabs/choose-name/choose-name.module').then( m => m.ChooseNamePageModule)
  },
  {
    path: 'rps-arena',
    loadChildren: () => import('./rpsTabs/rps-arena/rps-arena.module').then( m => m.RpsArenaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
