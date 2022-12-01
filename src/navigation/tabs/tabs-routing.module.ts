import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tabMenu',
        loadChildren: () => import('../tabMenu/tab-menu.module').then(m => m.TabMenuPageModule)
      },
      {
        path: 'tabRPS',
        loadChildren: () => import('../tabRPS/tabRPS.module').then(m => m.TabRPSPageModule)
      },
      {
        path: 'tabScore',
        loadChildren: () => import('../tabScore/tab-score.module').then(m => m.TabScorePageModule)
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
