import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.page.html',
  styleUrls: ['./tab-menu.page.scss'],
})
export class TabMenuPage {

  readonly placeholder = '/assets/images/placeholders/Portrait_Placeholder.png';


  // eslint-disable-next-line max-len
  constructor(public authService: AuthService, private route: Router, private alertController: AlertController) {
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
}
