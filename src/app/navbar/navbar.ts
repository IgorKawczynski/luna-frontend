import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  imports: []
})
export class Navbar {

  currentSectionId = 'home';

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'services', 'gallery', 'localization', 'footer'];

    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const inView = rect.top <= 150 && rect.bottom >= 150;

      if (inView) {
        this.currentSectionId = id;
        break;
      }
    }
  }

}
