import { Component } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {MenuController} from '@ionic/angular';


@Component({
  selector: 'app-tab-froggy-tap',
  templateUrl: 'tabFroggyTap.page.html',
  styleUrls: ['tabFroggyTap.page.scss']
})

export class TabFroggyTapPage {
  constructor(public menuService: MenuService, public menuController: MenuController) {}
  ionViewWillEnter()
  {
    //enables the sidemenu when the user leaves the Froggy Tap page
    this.menuController.enable(true).then();
    //fills the side menu with navigation options
    this.menuService.getAllFroggyTapPages();
  }
  ionViewWillLeave() {
    //disables the sidemenu when the user leaves the Froggy Tap page
    this.menuController.enable(false).then();
  }
  public async moveEyes(){
   /* const container = document.querySelector('.container');
    console.log(container);
    container.addEventListener('mousemove', () => {
      const eyes = document.querySelectorAll('.eye');
      [].forEach.call(eyes,function(eye) {
        let mouseX = eye.getBoundingClientRect().right;
        if (eye.classList.contains('eye-left')) {
          mouseX = eye.getBoundingClientRect().left;
        }
        const mouseY = eye.getBoundingClientRect().top;
        const radianDegrees = Math.atan2(posX - mouseX, posY - mouseY);
        const rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
        eye.style.transform = `rotate(${rotationDegrees}deg)`;
      });
    });*/
  }
}
