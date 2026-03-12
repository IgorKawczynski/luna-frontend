import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {About} from './about/about';
import {Services} from './services/services';
import {Gallery} from './gallery/gallery';
import {Pricing} from './pricing/pricing';
import {Booking} from './booking/booking';
import {Footer} from './footer/footer';
import {Home} from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, About, Services, Gallery, Pricing, Booking, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('luna-frontend');
}
