import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AlertController, AnimationController} from '@ionic/angular';
import {NativeAudio} from '@capgo/native-audio';
import {Capacitor} from '@capacitor/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.page.html',
  styleUrls: ['./tab-menu.page.scss'],
})
export class TabMenuPage {

  readonly placeholder = '/assets/images/placeholders/Portrait_Placeholder.png';

  // eslint-disable-next-line max-len
  constructor(public authService: AuthService,
              private route: Router,
              private alertController: AlertController,
              private animationCtrl: AnimationController) {
    this.preLoadAndPlayAudioMobile();
  }

  async presentLogOutAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Uitloggen',
      message: 'Ben je zeker dat je wilt uitloggen?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.authService.signOut();
          },
        },
      ],
    });

    await alert.present();
  }

//navigates the user to the login hub where they can pick a provider to log in
  goToLoginHub() {
    this.route.navigate(['tabs/tabMenu/login-hub']).then();
  }

  signOut() {
    this.presentLogOutAlert().then();
  }

  async showCredit() {
    const slideOnScreen = this.animationCtrl.create()
      .addElement(document.querySelector('.creditText'))
      .duration(1250)
      .fromTo('transform', 'translateX(-300px)', 'translateX(0px)');
    const slideOffScreen = this.animationCtrl.create()
      .addElement(document.querySelector('.creditText'))
      .duration(1250)
      .fromTo('transform', 'translateX(0px)', 'translateX(-350px)');
    slideOnScreen.play().then(await new Promise(f => setTimeout(f, 2500)));
    slideOffScreen.play().then(await new Promise(f => setTimeout(f, 1000)));
    slideOnScreen.stop();
    slideOffScreen.pause();
  }

  ionViewDidEnter() {
    this.showCredit().then();
    this.preLoadAndPlayAudioMobile();
  }
  preLoadAndPlayAudioMobile() {
    if (Capacitor.isNativePlatform()) {
      NativeAudio.preload({
        assetId: 'mario',
        assetPath: 'mario.mp3',
        audioChannelNum: 1,
        isUrl: false
      }).then();
      NativeAudio.loop({
        assetId: 'mario',
      }).then();
    }
  }

  isNative() {
    return Capacitor.isNativePlatform();
  }
}

