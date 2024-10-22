import { Component, Input } from '@angular/core';

interface iDeveloper {
  name: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-developercard',
  standalone: true,
  imports: [],
  templateUrl: './developercard.component.html',
  styleUrl: './developercard.component.css',
})
export class DevelopercardComponent {
  @Input() developer!: iDeveloper;
}
