import {Component, Input, OnInit} from '@angular/core';
import {MenuPage} from '../../../datatypes/Pages/menuPage';
import {MenuService} from '../../../services/menu.service';


@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.scss'],
})
export class RpsComponent implements OnInit {

  @Input() pages: MenuPage;
  constructor(public menuService: MenuService) {
  }
  ngOnInit() {}

}
