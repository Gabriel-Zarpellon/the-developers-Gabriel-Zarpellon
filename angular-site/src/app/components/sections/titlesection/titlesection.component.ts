import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titlesection',
  standalone: true,
  imports: [],
  templateUrl: './titlesection.component.html',
  styleUrl: './titlesection.component.scss',
})
export class TitlesectionComponent {
  @Input() title!: string;
}
