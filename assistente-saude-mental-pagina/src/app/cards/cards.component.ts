import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
   @Input()
  description!: string

  @Input()
  icon!: string;

  @Input()
  cardType !: string


}
