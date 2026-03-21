import {AfterViewInit, Component, signal} from '@angular/core';
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
export class App implements AfterViewInit {

  protected readonly title = signal('Luna - Gabinet Kosmetologiczny');

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  }


}
