import {Component, OnInit, Renderer2} from '@angular/core';

import {StorageService} from '../../../services/storage.service';
import {AudioService} from '../../../services/audio.service';

@Component({
  selector: 'app-app-menu-settings',
  templateUrl: './app-menu-settings.page.html',
  styleUrls: ['./app-menu-settings.page.scss'],
})
export class AppMenuSettingsPage implements OnInit {
  //Default values for the audio slider
  generalAudioVolumeSlider: any = {
    value: 6
  };

  constructor(private renderer: Renderer2, private storageService: StorageService, public audioService: AudioService) {
  }

  pinFormatter(value: number) {
    return `${value}`;
  }

  onToggleColorTheme(event, colortheme) {
    if (event.el.id === 'dark') {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      // eslint-disable-next-line max-len
      if (event.el.color !== 'dark' ? (event.el.color = 'dark', colortheme.el.color = 'dark') : (event.el.color = 'light', colortheme.el.color = 'dark')) {
      }
      this.storageService.set('colortheme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      // eslint-disable-next-line max-len
      if (event.el.color !== 'light' ? (event.el.color = 'light', colortheme.el.color = 'dark') : (event.el.color = 'dark', colortheme.el.color = 'light')) {
      }
      this.storageService.set('colortheme', 'light');
    }
  }

  ngOnInit(): void {
    this.storageService.get('generalAudioVolume').then((value: number) => {
      //Get volume and use it if it exists, otherwise the default value is used.
      if(value != null)
      {
        this.generalAudioVolumeSlider.value = (value*10);
      }
    });
  }
  changeGeneralAudioVolume(generalAudioVolumeSlider: any) {
    //Sets the value of the slider to the current value
    this.generalAudioVolumeSlider.value = generalAudioVolumeSlider.detail.value;
    //Sets stored value of the audio
    this.storageService.set('generalAudioVolume', generalAudioVolumeSlider.detail.value/10);
    //Sets the current volume for the audio in the service
    this.audioService.setAudioVolume(generalAudioVolumeSlider.detail.value/10);
    //Sets the current volume for the Native audio
    this.audioService.setAudioSettingsNative();
  }
}

