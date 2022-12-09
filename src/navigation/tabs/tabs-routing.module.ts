import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      //Froggy Tap
      {
        path: 'tabFroggyTap',
        loadChildren: () => import('../tabFroggyTap/tabFroggyTap.module').then(m => m.Tab1PageModule)
      },
      //Boter kaas en eieren
      {
        path: 'tabBKE',
        loadChildren: () => import('../tabBKE/tabBKE.module').then(m => m.TabBKEModule)
      },
      //Main menu
      {
        path: 'tabMenu',
        loadChildren: () => import('../tabMenu/tab-menu.module').then(m => m.TabMenuPageModule)
      },
      //Schaar steen papier
      {
        path: 'tabRPS',
        loadChildren: () => import('../tabRPS/tabRPS.module').then(m => m.TabRPSPageModule)
      },
      //Scorebord
      {
        path: 'tabScore',
        loadChildren: () => import('../tabScore/tab-score.module').then(m => m.TabScorePageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/tabMenu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tabMenu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
