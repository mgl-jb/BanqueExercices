import { Component } from '@angular/core';
import exercices from '../assets/exercices.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BanqueExercices';
  Exercices: any = exercices;
}
