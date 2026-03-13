import {ChangeDetectorRef, Component, inject, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {

  private cd = inject(ChangeDetectorRef);

  images = [
    'assets/clinic-interior.webp',
    'assets/clinic-interior2.webp',
    'assets/clinic-interior3.webp',
    'assets/clinic-interior4.webp'
  ];

  currentImage = signal(0);
  interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currentImage.set((this.currentImage() + 1) % this.images.length);
      this.cd.detectChanges();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
