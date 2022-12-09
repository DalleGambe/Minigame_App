import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../services/menu.service';

@Component({
  selector: 'app-solo-mode',
  templateUrl: './solo-mode.page.html',
  styleUrls: ['./solo-mode.page.scss'],
})
export class SoloModePage implements OnInit {

  constructor(public menuService: MenuService) {}
  ionViewWillEnter()
  {
    this.menuService.getAllFroggyTapPages();
  }

  ngOnInit() {
  }

}
