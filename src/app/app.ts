import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {About} from './about/about';
import {Services} from './services/services';
import {Gallery} from './gallery/gallery';
import {Footer} from './footer/footer';
import {Home} from './home/home';
import {Localization} from './localization/localization';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, About, Services, Gallery, Footer, Home, Localization],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('luna-frontend');
}
