import {Component, OnInit, Renderer2} from '@angular/core';
import {MenuService} from '../services/menu.service';
import {StorageService} from '../services/storage.service';
import {Capacitor} from '@capacitor/core';
import {AudioService} from '../services/audio.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public menuService: MenuService, private renderer: Renderer2,
              private storageService: StorageService, public audioService: AudioService) {
  }
  isNative() {
    return Capacitor.isNativePlatform();
  }
  ngOnInit(): void {
    this.storageService.get('colortheme').then((value: string) => {
      switch(value)
      {
        case 'light':
          this.renderer.setAttribute(document.body, 'color-theme','light');
          break;
        default:
          this.renderer.setAttribute(document.body, 'color-theme','dark');
          break;
      }
    });
  }
}


