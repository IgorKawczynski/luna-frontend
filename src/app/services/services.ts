import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import { faSun, faDroplet, faSpa, faLeaf, faStar } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-services',
  imports: [
    NgIf,
    FaIconComponent,
    NgClass
  ],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  services = [
    {
      title: 'Redukcja przebarwień',
      description: 'Zabiegi wyrównujące koloryt skóry i usuwające przebarwienia powstałe wskutek słońca lub zmian hormonalnych.',
      price: '400 zł',
      icon: faDroplet
    },
    {
      title: 'Terapia blizn',
      description: 'Nowoczesne metody redukcji blizn potrądzikowych oraz chirurgicznych przy użyciu technologii laserowej.',
      price: '250 zł',
      icon: faStar
    },
    {
      title: 'Zabiegi laserowe',
      description: 'Zaawansowane technologie laserowe poprawiające strukturę skóry oraz redukujące niedoskonałości.',
      price: '90 zł',
      icon: faSpa
    },
    {
      title: 'Odmładzanie skóry',
      description: 'Terapie stymulujące produkcję kolagenu i elastyny dla młodszego wyglądu skóry.',
      price: '500 zł',
      icon: faLeaf
    },
    {
      title: 'Oczyszczanie skóry',
      description: 'Profesjonalne zabiegi oczyszczające dostosowane do rodzaju skóry.',
      price: '770 zł',
      icon: faSun
    },
    {
      title: 'Terapia indywidualna',
      description: 'Program pielęgnacyjny dobrany po konsultacji kosmetologicznej.',
      price: '350 zł',
      icon: faDroplet
    }
  ];

  protected readonly faStar = faStar;
}
