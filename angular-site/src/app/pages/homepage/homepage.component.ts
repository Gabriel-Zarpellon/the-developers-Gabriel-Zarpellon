import { Component } from '@angular/core';
import { HerosectionComponent } from '../../components/sections/herosection/herosection.component';
import { CtasectionComponent } from '../../components/sections/ctasection/ctasection.component';
import { DeveloperssectionComponent } from '../../components/sections/developerssection/developerssection.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HerosectionComponent,
    CtasectionComponent,
    DeveloperssectionComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
