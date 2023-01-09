import {Component} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {StorageService} from '../../services/storage.service';
import {Capacitor} from '@capacitor/core';
import {NativeAudio} from '@capgo/native-audio';
import {AudioService} from '../../services/audio.service';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.page.html',
  styleUrls: ['./startscreen.page.scss'],
})
export class StartscreenPage {
  backgroundMusicVolumeNotNative: any = {
    volume: 0.5
  };

  constructor(public menuController: MenuController, private storageService: StorageService, public audioService: AudioService) {
    this.hideTabBar();
  }

  //disables the sidemenu on the page when the user enters
  ionViewWillEnter() {
    this.menuController.enable(false).then();
    if (Capacitor.isNativePlatform()) {
      this.audioService.setAudioSettingsNative();
    }
  }

  //hides the bar with tabs on this page
  hideTabBar = (): void => {
    const tabBar = document.getElementById('app-tab-bar');
    if (tabBar !== null) {
      tabBar.style.display = 'none';
    }
  };

  isNative() {
    return Capacitor.isNativePlatform();
  }

}
