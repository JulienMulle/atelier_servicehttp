import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemonList/pokemonList.component';
import { PokemonCardComponent } from './pokemonCard/pokemonCard.component';

@NgModule({
  declarations: [		
    AppComponent,
      PokemonListComponent,
      PokemonCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
