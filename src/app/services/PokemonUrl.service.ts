import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';
import { Pokedex } from '../models/Pokedex';


@Injectable({
  providedIn: 'root'
})
export class PokemonUrlService {

  private baseUrl = `https://api.pokemontcg.io/v1/`

constructor(private http: HttpClient) { }

getPokemons(): Observable<Pokedex>{
  return this.http.get<Pokedex>(`${this.baseUrl}/cards`) 
}
}
