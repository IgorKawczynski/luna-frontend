import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-gallery',
  imports: [
    SafeUrlPipe
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {

  reels: string[] = [
    'https://www.instagram.com/p/DW1mpoijP99/embed',
    'https://www.instagram.com/p/DW1mpoijP99/embed',
    'https://www.instagram.com/p/DW1mpoijP99/embed',
    'https://www.instagram.com/p/DW1mpoijP99/embed',
    'https://www.instagram.com/p/DW1mpoijP99/embed',
  ];

  constructor() {}

  ngOnInit(): void {}

}
