import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../../services/menu.service';


@Component({
  selector: 'app-vs-ai',
  templateUrl: './vs-ai.page.html',
  styleUrls: ['./vs-ai.page.scss'],
})
export class VsAiPage implements OnInit {

  constructor(public menuService: MenuService) {}
  ngOnInit() {}
  ionViewWillEnter()
  {
    this.menuService.getAllBkePages();
  }
}
