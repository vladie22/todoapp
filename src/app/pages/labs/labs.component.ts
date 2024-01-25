import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = "Welcome to my first project with Angular";
  tasks = [
    "take out the garbage",
    "wash dishes",
    "wash the car",
    "goinf to market",
  ]

}
