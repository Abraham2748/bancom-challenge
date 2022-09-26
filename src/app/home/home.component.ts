import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home-mobile.component.scss',
    './home-tablet.component.scss',
    './home-desktop.component.scss',
  ],
})
export class HomeComponent implements OnInit {
  lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.';
  features = [
    {
      img: '../../assets/home/feature-1.svg',
      title: 'Robust workflow',
      description: this.lorem,
    },
    {
      img: '../../assets/home/feature-2.svg',
      title: 'Flexibility',
      description: this.lorem,
    },
    {
      img: '../../assets/home/feature-3.svg',
      title: 'User friendly',
      description: this.lorem,
    },
    {
      img: '../../assets/home/feature-4.svg',
      title: 'Multiple layouts',
      description: this.lorem,
    },
    {
      img: '../../assets/home/feature-5.svg',
      title: 'Better components',
      description: this.lorem,
    },
    {
      img: '../../assets/home/feature-6.svg',
      title: 'Well organized',
      description: this.lorem,
    },
  ];

  metrics = [
    {
      img: '../../assets/home/feature-1.svg',
      title: '10,000+',
      description: 'Downloads per day',
    },
    {
      img: '../../assets/home/feature-4.svg',
      title: '2 Million',
      description: 'Users',
    },
    {
      img: '../../assets/home/feature-5.svg',
      title: '500+',
      description: 'Clients',
    },
    {
      img: '../../assets/home/feature-6.svg',
      title: '140',
      description: 'Countries',
    },
  ];

  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}
}
