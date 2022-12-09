import {Injectable} from '@angular/core';
import {MenuPage} from '../datatypes/Pages/menuPage';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  //the current active menu on a page
  activeMenu;
  // The list of schaar steen papier pages that can be navigated to in the application.
  schaarSteenPapierPageList: MenuPage[] = [
    {
      id: 1,
      title: 'Regels',
      path: '/tabs/tabRPS',
      icon: 'clipboard'
    },
    {
      id: 2,
      title: 'Tegen lokale speler',
      path: '/tabs/tabRPS/vs-player',
      icon: 'person'
    },
    {
      id: 3,
      title: 'Tegen Ai',
      path: '/tabs/tabRPS/vs-ai',
      icon: 'logo-android'
    },
  ];

  // The list of boter kaas en eieren pages that can be navigated to in the application.
  boterKaasEierenPageList: MenuPage[] = [
    {
      id: 4,
      title: 'Regels',
      path: '/tabs/tabBKE',
      icon: 'clipboard'
    },
    {
      id: 5,
      title: 'Tegen lokale speler',
      path: '/tabs/tabBKE/vs-player',
      icon: 'person'
    },
    {
      id: 6,
      title: 'Tegen Ai',
      path: '/tabs/tabBKE/vs-ai',
      icon: 'logo-android'
    },
  ];

  //the list of froggy tap pages that can be navigated to in the application.
  froggyTapPageList: MenuPage[] = [
    {
      id: 7,
      title: 'Regels',
      path: '/tabs/tabFroggyTap',
      icon: 'clipboard'
    },
    {
      id: 8,
      title: 'Alleen spelen',
      path: '/tabs/tabFroggyTap/solo-mode',
      icon: 'body'
    },
  ];
  constructor() {}

  /**
   * Get a copy of all the pages for the active menu.
   *
   * @return A list of all the pages for the active menu.
   */

  getAllRpsPages(){
    this.activeMenu = this.schaarSteenPapierPageList;
  }
  getAllBkePages() {
    this.activeMenu = this.boterKaasEierenPageList;
  }

  getAllFroggyTapPages() {
    this.activeMenu = this.froggyTapPageList;
  }
}

