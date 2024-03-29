import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RpsComponent} from './rpsPage/rps/rps.component';
import {IonicModule} from '@ionic/angular';
import {SidemenuComponent} from './sidemenu/sidemenu.component';
import {PostscreenComponent} from './postscreen/postscreen.component';



@NgModule({
  declarations: [RpsComponent, SidemenuComponent, PostscreenComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    RpsComponent,
    SidemenuComponent,
    PostscreenComponent,
  ],
})
export class SharedModule { }
