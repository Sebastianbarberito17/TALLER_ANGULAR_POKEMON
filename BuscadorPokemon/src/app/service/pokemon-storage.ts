import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

export interface PokemonTarjeta {
    id:number;
    nombre: string;
    imagen: string;
    baseExperience: string;
    tipo:string;
    esfavorito?: boolean;

}

@Injectable({
  providedIn: 'rootgit ad'
})
export class PokemonStorage {

    private http = inject (HttpClient);
    private readonly STORAGE_KEY = 'equipo_pokemon_registrado';
    misPokemons = signal <PokemonTarjeta []>([]);

constructor(){
    this.cargarDesdeStorage();
}

private cargarDesdeStorage(){
    const data = localStorage.getItem(this.STORAGE_KEY);
    if(data){
        this.misPokemons.set(JSON.parse(data));
    }
}
buscarEnApi(nombreid:string){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${nombreid}`)

}

guardarPokemon(nuevo:PokemonTarjeta){
    const actualizados = [...this.misPokemons(), nuevo];
    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(actualizados));

}
actualizarFavorito(id: number){
    const actualizados = this.misPokemons().map(poke => {
        if(poke.id == id){
            return { ...poke, esfavorito: !poke.esfavorito };
        }
        return poke;
    });
    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(actualizados));

    
}

liberarPokemon(id: number){
    const filtrado = this.misPokemons().filter(poke => poke.id !== id);

    this.misPokemons.set(filtrado);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtrado));

}
    consultarPokemon(name:string) :Observable<any> {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

        return this.http.get(`${apiUrl}/${name.toLowerCase()}`);

    }
}

