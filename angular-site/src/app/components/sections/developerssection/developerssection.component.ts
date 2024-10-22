import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DevelopercardComponent } from './developercard/developercard.component';

@Component({
  selector: 'app-developerssection',
  standalone: true,
  imports: [CommonModule, DevelopercardComponent],
  templateUrl: './developerssection.component.html',
  styleUrl: './developerssection.component.scss',
})
export class DeveloperssectionComponent {
  developerList = [
    {
      name: 'Josefine',
      img: 'assets/dev1.svg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'Rudolf',
      img: 'assets/dev2.svg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'Lucy',
      img: 'assets/dev3.svg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'Robert',
      img: 'assets/dev4.svg',
      description: 'Lorem ipsum dolor sit amet',
    },
  ];
}
