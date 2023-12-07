import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss'
})
export class SlideshowComponent implements OnInit {
  images = ['macbook.jpg', 'standup.jpg', 'university.jpg'];
  headlines = [
    'Bring enineering to the next level',
    'Born to code',
    'Coffee is life'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 5000);
  }
}
