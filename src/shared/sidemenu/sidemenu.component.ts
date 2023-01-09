import {Component, Input, OnInit} from '@angular/core';
import {MenuPage} from '../../datatypes/Pages/menuPage';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  @Input() pages: MenuPage;
  constructor(public menuService: MenuService) {
  }
  ngOnInit() {}
}
