import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../models/Pokedex';
import { Pokemon } from '../models/pokemon.models';
import { PokemonUrlService } from '../services/PokemonUrl.service';

@Component({
  selector: 'app-pokemonList',
  templateUrl: './pokemonList.component.html',
  styleUrls: ['./pokemonList.component.css']
})
export class PokemonListComponent implements OnInit {
 pokemons: Pokemon[] = []

  constructor(private pokemonsService: PokemonUrlService) { }

  ngOnInit() {
  this.pokemonsService.getPokemons().subscribe((pokedex: Pokedex)=> {
    this.pokemons = pokedex.cards
  });
  ()=> console.log('ok')
  }

}
