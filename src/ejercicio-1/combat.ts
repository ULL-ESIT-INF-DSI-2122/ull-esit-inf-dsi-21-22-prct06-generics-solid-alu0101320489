import { Pokedex } from "./pokedex";
import { Pokemon } from "./universe";
import { Marvel } from "./universe";
import { DragonBall } from "./universe";
import { Disney } from "./universe";
/**
 * Clase que realiza un combate entre Pokemons
 */
export class Combat{
    /**
     * 
     * @param pokedex Recibe una Pokedex donde se deberan ver los datos de los pokemons
     * @param pokemon1 Primer pokemon
     * @param pokemon2 Segundo pokemon
     */
    constructor(private pokedex: Pokedex<Pokemon|Marvel|DragonBall|Disney>, private figther1: string, private figther2: string,) {}

    /**
     * 
     * @returns Retorna el ganador del combate
     */
    start(): string {
        let ganador: string;
        if ((this.pokedex.isIN(this.figther1)) && (this.pokedex.isIN(this.figther2))) {

            let p1_ps: number = this.pokedex.getPS(this.figther1);
            let p2_ps: number = this.pokedex.getPS(this.figther2);

            while (p1_ps > 0 && p2_ps > 0) {
                if (this.faster() == this.figther1) {
                    p2_ps = Math.round(p2_ps - this.damage(this.figther1, this.figther2));
                    if (p2_ps <= 0) {
                        p2_ps = 0;
                        console.log(`${this.figther1} ataca, la salud restante de ${this.figther2} es ${p2_ps}`);
                        console.log(`${this.figther2} se ha debilitado`);
                        break;
                    }
                    console.log(`${this.figther1} ataca, la salud restante de ${this.figther2} es ${p2_ps}`);
                    p1_ps = Math.round(p1_ps - this.damage(this.figther2, this.figther1));
                    if (p1_ps <= 0) {
                        p1_ps = 0;
                        console.log(`${this.figther2} ataca, la salud restante de ${this.figther1} es ${p1_ps}`);
                        console.log(`${this.figther1} se ha debilitado`);
                        break;
                    }
                    console.log(`${this.figther2} ataca, la salud restante de ${this.figther1} es ${p1_ps}`);
                } else {
                    p1_ps = Math.round(p1_ps - this.damage(this.figther2, this.figther1));
                    if (p1_ps <= 0) {
                        p1_ps = 0;
                        console.log(`${this.figther2} ataca, la salud restante de ${this.figther1} es ${p1_ps}`);
                        console.log(`${this.figther1} se ha debilitado`);
                        break;
                    }
                    console.log(`${this.figther2} ataca, la salud restante de ${this.figther1} es ${p1_ps}`);
                    p2_ps = Math.round(p2_ps - this.damage(this.figther1, this.figther2));
                    if (p2_ps <= 0) {
                        p2_ps = 0;
                        console.log(`${this.figther1} ataca, la salud restante de ${this.figther2} es ${p2_ps}`);
                        console.log(`${this.figther2} se ha debilitado`);
                        break;
                    }
                    console.log(`${this.figther1} ataca, la salud restante de ${this.figther2} es ${p2_ps}`);
                }
            }

            if (p1_ps <= 0) {
                console.log(`El ganador es ${this.figther2}`);
                return this.figther2;
            } else {
                console.log(`El ganador es ${this.figther1}`);
                return this.figther1;
            }

        } else {
            return 'No se pueden encontrar los pokemons en la pokedex'
        }
    }
    /**
     * 
     * @returns Devuelve el pokemon más rápido
     */
    faster(): string {
        if (this.pokedex.getVelocidad(this.figther1) >= this.pokedex.getVelocidad(this.figther2)) {
            return this.figther1;
        } else {
            return this.figther2;
        }
    }
    /**
     * 
     * @param pok1 Pokemon 1
     * @param pok2 Pokemon 2
     * @returns Daño realizado de un ataque a otro
     */
    damage(figth1: string, figth2:string): number {
            let daño: number = 0; 
            let efectividad: string = '';
            let tipo1: string = this.pokedex.getEnergia(figth1);
            let tipo2: string = this.pokedex.getEnergia(figth2);

            switch(tipo1){
                case('fuego'):
                    if (tipo2 == 'agua') {
                        efectividad = 'no efectivo'
                    } else if (tipo2 == 'fuego') {
                        efectividad = 'no efectivo'
                    } else if (tipo2 == 'tierra'){
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'cielo'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yang'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin-yang'){
                        efectividad = 'no efectivo'
                    }
                    break;
                case('agua'):
                    if (tipo2 == 'agua') {
                        efectividad = 'no efectivo'
                    } else if (tipo2 == 'fuego') {
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'tierra'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'cielo'){
                        efectividad = 'no efectivo'
                    } else if (tipo2 == 'yin'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yang'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin-yang'){
                        efectividad = 'no efectivo'
                    }
                    break;
                case('tierra'):
                    if (tipo2 == 'agua') {
                        efectividad = 'no efectivo'
                    } else if (tipo2 == 'fuego') {
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'tierra'){
                        efectividad = 'neutralo'
                    } else if (tipo2 == 'cielo'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yang'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin-yang'){
                        efectividad = 'no efectivo'
                    }
                    break;
                case('cielo'):
                    if (tipo2 == 'agua') {
                        efectividad = 'neutral'
                    } else if (tipo2 == 'fuego') {
                        efectividad = 'neutral'
                    } else if (tipo2 == 'tierra'){
                        efectividad = 'no efectivo'
                    } else if (tipo2 == 'cielo'){
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'yin'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yang'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin-yang'){
                        efectividad = 'no efectivo'
                    }
                    break;
                case('yin'):
                    if (tipo2 == 'agua') {
                        efectividad = 'neutral'
                    } else if (tipo2 == 'fuego') {
                        efectividad = 'neutral'
                    } else if (tipo2 == 'tierra'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'cielo'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yang'){
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'yin-yang'){
                        efectividad = 'neutral'
                    }
                    break;
                case('yang'):
                    if (tipo2 == 'agua') {
                        efectividad = 'neutral'
                    } else if (tipo2 == 'fuego') {
                        efectividad = 'neutral'
                    } else if (tipo2 == 'tierra'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'cielo'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin'){
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'yang'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin-yang'){
                        efectividad = 'neutral'
                    }
                    break;
                case('yin-yang'):
                    if (tipo2 == 'agua') {
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'fuego') {
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'tierra'){
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'cielo'){
                        efectividad = 'super efectivo'
                    } else if (tipo2 == 'yin'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yang'){
                        efectividad = 'neutral'
                    } else if (tipo2 == 'yin-yang'){
                        efectividad = 'neutral'
                    }
                    break;
            }
        
            if (efectividad == 'super efectivo') {
                daño = 50 * (this.pokedex.getAtaque(figth1)/this.pokedex.getDefensa(figth2)) * 2;
            } else if (efectividad == 'neutral') {
                daño = 50 * (this.pokedex.getAtaque(figth1)/this.pokedex.getDefensa(figth2)) * 1;
            } else if (efectividad == 'no efectivo') {
                daño = 50 * (this.pokedex.getAtaque(figth1)/this.pokedex.getDefensa(figth2)) * 0,5;
            }
            return daño;
        
    }
}
