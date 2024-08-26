import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import Game from '../../model/game.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  games: Game[] = [
    {
      label: "Todas as plataformas",
      gameType: "XPTO",
      image: "assets/bt-1.jpg",
      price: "R$ 199,99"
    },
    {
      label: "Físico",
      gameType: "XPTO",
      image: "assets/bt-bad-company-2.jpg",
      price: "R$ 399,99"
    },
    {
      label: "Físico",
      gameType: "XPTO | PS4",
      image: "assets/bt-hardline.jpg",
      price: "R$ 299,99"
    },
    {
      label: "Digital",
      gameType: "XPTO | PS4",
      image: "assets/bt-4.jpg",
      price: "R$ 499,99"
    },
    {
     label: "Exclusive",
      gameType: "PS4",
      image: "assets/bt-5.jpg",
      price: "R$ 499,99"
    }
  ];

}
