import { Pokemon } from "./universe";
import { Marvel } from "./universe";
import { DragonBall } from "./universe";
import { Disney } from "./universe";
/**
 * Clase Pokedex que almacena los personajes y recupera información de estos
 */
export class Pokedex<T extends Pokemon|Marvel|DragonBall|Disney> {
    /**
     * 
     * @param characters Tiene como atributos un array de personajes
     */
    constructor(private characters: T[]) {}

    getPokemon(n: number): T {
        return this.characters[n];
    }
    getPokemonName(n: number): string {
        return this.characters[n].getNombre();
    }
    getEnergia(n: string): string {
        for (let i = 0; i < this.characters.length; i++) {
            if (n == this.getPokemonName(i)) {
                return this.getPokemon(i).getEnergia();
            }
        }
        return 'El personaje no se encuentra en la pokedex';
    }
    getAtaque(n: string):number {
        for (let i = 0; i < this.characters.length; i++) {
            if (n == this.getPokemonName(i)) {
                return this.getPokemon(i).getStats()[0];
            }
        }
        return -1;
    }
    getDefensa(n: string):number {
        for (let i = 0; i < this.characters.length; i++) {
            if (n == this.getPokemonName(i)) {
                return this.getPokemon(i).getStats()[1];
            }
        }
        return -1;
    }
    getVelocidad(n: string): number {
        for (let i = 0; i < this.characters.length; i++) {
            if (n == this.getPokemonName(i)) {
                return this.getPokemon(i).getStats()[2];
            }
        }
        return -1;
    }
    getPS(n: string): number {
        for (let i = 0; i < this.characters.length; i++) {
            if (n == this.getPokemonName(i)) {
                return this.getPokemon(i).getStats()[3];
            }
        }
        return -1;
    }
    isIN(n: string): boolean {
        for (let i = 0; i < this.characters.length; i++) {
            if (n == this.getPokemonName(i)) {
                return true;
            }
        }
        return false;
    }

}