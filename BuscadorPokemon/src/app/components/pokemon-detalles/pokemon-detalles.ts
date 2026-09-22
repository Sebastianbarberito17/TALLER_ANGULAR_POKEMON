import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { PokemonStorage } from '../../services/pokemon-storage';

@Component({
  selector: 'app-pokemon-detalles',
  standalone : true,
  imports: [RouterLink],
  templateUrl: './pokemon-detalles.html',
  styleUrl: './pokemon-detalles.css'
})
export class PokemonDetalles implements OnInit{
  private routes = inject(ActivatedRoute);
  private pokeService = inject(PokemonStorage)
  pokemonData: any = null;
  cargando: boolean = true;

  ngOninit(): void{
    const pokeName = this.routes.snapshot.params ['name'];

    this.pokeService.consultarpokemon(pokeName).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.cargando = false;

      },
      error: (err) => {
        console.error('se quemo esta vaina. No llego ningun dato.', err);
        this.cargando = false;
      }
    })
  }
}
