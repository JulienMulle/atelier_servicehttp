import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.models';

@Component({
  selector: 'app-pokemonCard',
  templateUrl: './pokemonCard.component.html',
  styleUrls: ['./pokemonCard.component.css']
})
export class PokemonCardComponent implements OnInit {
@Input() pokemon! :Pokemon

  constructor() { }

  ngOnInit() {
  }

}
