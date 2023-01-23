import {Component} from '@angular/core';
import {MenuController} from '@ionic/angular';
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

  constructor(public menuController: MenuController, public audioService: AudioService) {
  }

  //disables the sidemenu on the page when the user enters
  ionViewWillEnter() {
    this.menuController.enable(false).then();
    if (Capacitor.isNativePlatform()) {
      this.audioService.getCurrentStoredAudioVolume();
      this.audioService.setAudioSettingsNative();
      NativeAudio.loop({assetId: 'menutheme'});
    }
  }

  isNative() {
    return Capacitor.isNativePlatform();
  }

  playSoundeffect() {
    if(Capacitor.isNativePlatform())
    {
      //If the user is on a native platform, play the soundeffect using the plugin
      this.audioService.playSoundEffect('startscreenClick');
    }
    else {
      //Else, play it from the audio element located on the page
      //Get audio element
      const soundEffect = document.getElementById('NotNativeStartscreenSoundeffect') as HTMLMediaElement;
      //play audio element
      soundEffect.play();
    }
  }
}
