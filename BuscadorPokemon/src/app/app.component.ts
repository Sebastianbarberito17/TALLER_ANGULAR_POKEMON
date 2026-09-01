import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon, PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private pokemonService = inject(PokemonService);

  query = '';
  pokemon = signal<Pokemon | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  search(): void {
    const name = this.query.trim();
    if (!name) {
      this.error.set('Escribe el nombre de un Pokémon.');
      this.pokemon.set(null);
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.pokemonService.search(name).subscribe({
      next: (result) => {
        this.pokemon.set(result);
        this.loading.set(false);
      },
      error: () => {
        this.pokemon.set(null);
        this.error.set(`No se encontró ningún Pokémon llamado "${name}".`);
        this.loading.set(false);
      },
    });
  }
}
