import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RpsComponent} from './rpsPage/rps/rps.component';
import {IonicModule} from '@ionic/angular';
import {SidemenuComponent} from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [RpsComponent, SidemenuComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    RpsComponent,
    SidemenuComponent,
  ]
})
export class SharedModule { }
