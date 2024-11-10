import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPriceComponent } from "./card-price/card-price.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  gameCover:string=""
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string = "Disital PS4"
  @Input()
  gamePrice:string = "R$ 399,90"
}
