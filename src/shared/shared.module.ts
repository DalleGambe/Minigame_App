import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RpsComponent} from './rpsPage/rps/rps.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [RpsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    RpsComponent
  ]
})
export class SharedModule { }
