import { Routes } from '@angular/router'
import {RegistroUsuarioComponent} from './components/registro-usuario/registro-usuario.component';
import {BuscadorPokemon} from './components/Buscador-pokemon/Buscador-pokemon.component';

export const routes: Routes = [
    {path: '', redirectTo: 'registro', pathMatch:'full'},
    {path: 'registro', component:RegistroUsuarioComponent},
    {path: 'buscador', component:RegistroUsuarioComponent},
    {path: '**', redirectTo: 'registro'}

];