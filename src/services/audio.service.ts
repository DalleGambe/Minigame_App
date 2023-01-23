import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {NativeAudio} from '@capgo/native-audio';
import {Capacitor} from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioVolume;
  private readonly defaultAudioVolume = 0.6;

  constructor(private storageService: StorageService) {
    this.getCurrentStoredAudioVolume();
  }

  //Gets the current set audio in the service
  public getAudioVolume(): number {
    if (this.audioVolume === undefined) {
      console.log(this.audioVolume);
      return this.defaultAudioVolume;
    }
    return this.audioVolume;
  }

  /**
   * Sets the current volume
   */
  public setAudioVolume(audioNumber: number) {
    this.audioVolume = audioNumber;
  };

  //Gets the current audio stored inside the application
  public getCurrentStoredAudioVolume() {
    this.storageService.get('generalAudioVolume').then((value: number) => {
      if (value === undefined) {
        console.log('value', {value});
        this.audioVolume = this.defaultAudioVolume;
      } else {
        this.audioVolume = value;
      }
    });
    console.log(this.audioVolume);
  }

  //Sets the current Native volume of the Audio
  public setAudioSettingsNative() {
    //setvolume
    NativeAudio.setVolume({assetId: 'mario', volume: this.getAudioVolume()});
    NativeAudio.setVolume({assetId: 'startscreenClick', volume: this.getAudioVolume()});
  };

  playSoundEffect(soundEffect: string) {
    if (Capacitor.isNativePlatform) {
      NativeAudio.play({
        assetId: soundEffect,
        time: 0
      });
    }
  }
}

