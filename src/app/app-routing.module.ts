import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('../navigation/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'startscreen',
    pathMatch: 'full'
  },
  {
    path: 'startscreen',
    loadChildren: () => import('../navigation/startscreen/startscreen.module').then(m => m.StartscreenPageModule)
  },
  {
    path: 'tabScore',
    loadChildren: () => import('../navigation/tabScore/tab-score.module').then(m => m.TabScorePageModule)
  },
  {
    path: 'tabMenu',
    loadChildren: () => import('../navigation/tabMenu/tab-menu.module').then(m => m.TabMenuPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
