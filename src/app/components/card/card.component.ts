import { Component, Input } from '@angular/core';
import { Result } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() character!: Result;
}
