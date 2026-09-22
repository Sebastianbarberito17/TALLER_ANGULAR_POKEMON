import { Routes } from '@angular/router'
import { RegistroUsuario } from './components/registro-usuario/registro-usuario';
import { BuscadorPokemon } from './components/buscador-pokemon/buscador-pokemon';
import { Pikachu } from './components/pokemon/pikachu/pikachu';
import { Charizard } from './components/pokemon/charizard/charizard';
import { Dragonite } from './components/pokemon/dragonite/dragonite';
import { Haxorus } from './components/pokemon/haxorus/haxorus';
import { Goodra } from './components/pokemon/goodra/goodra';
import { Flechinder } from './components/pokemon/flechinder/flechinder';
import { PokemonDetalles } from './components/pokemon-detalles/pokemon-detalles';
import { PokemonLista } from './components/pokemon-lista/pokemon-lista';

export const routes: Routes = [
    {path: '', redirectTo: 'registro', pathMatch: 'full'},
    {path: 'registro', component: RegistroUsuario},
    {path: 'buscador', component: BuscadorPokemon},
    {path: '**', redirectTo: 'registro'},
    {path: 'pikachu_manual', component: Pikachu},
    {path: 'charizard_manual', component: Charizard},
    {path: 'dragonite_manual', component: Dragonite},
    {path: 'haxorus_manual', component: Haxorus},
    {path: 'goodra_manual', component: Goodra},
    {path: 'Flechinder_manual', component: Flechinder}
];