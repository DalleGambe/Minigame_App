import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  constructor() {
  }
  public async moveEyes(){
    /*const container = document.querySelector('.container');
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
