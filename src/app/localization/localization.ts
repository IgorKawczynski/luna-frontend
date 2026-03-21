import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-localization',
  imports: [],
  templateUrl: './localization.html',
  styleUrl: './localization.css',
})
export class Localization implements AfterViewInit {

  ngAfterViewInit(): void {
    const map = L.map('map').setView([52.6030, 19.2530], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([52.6030, 19.2530]).addTo(map)
      .bindPopup('Secret of Beauty Clinic<br>Szreńsk, Mazowieckie')
      .openPopup();
  }
}
