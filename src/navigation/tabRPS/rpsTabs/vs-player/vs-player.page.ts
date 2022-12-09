import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../../services/menu.service';

@Component({
  selector: 'app-vs-player',
  templateUrl: './vs-player.page.html',
  styleUrls: ['./vs-player.page.scss'],
})
export class VsPlayerPage implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {}
  ionViewWillEnter() {
    this.menuService.getAllRpsPages();
  }
}
