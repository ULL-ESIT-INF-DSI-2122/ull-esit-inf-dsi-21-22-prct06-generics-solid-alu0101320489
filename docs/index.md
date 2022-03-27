---
title: "Práctica 6 - Clases e interfaces genéricas. Principios SOLID"
---

## Ejercicio 1 - El combate definitivo

### Fighter y derivadas

Para poder crear varios universos hemos creado una clase abstracta genérica que contendra los atributos básicos para todos los personajes, nombre, peso, altura, etc.

```
export abstract class Fighter<T> {

    constructor(public readonly nombre: string, public readonly peso: number, public readonly altura: number,
        public readonly stats: [number, number, number, number]) {}

    getNombre(): string {
        return this.nombre;
    }
    getPeso(): number {
        return this.peso;
    }
    getAltura(): number {
        return this.altura;
    }
    getStats(): [number, number, number, number] {
        return this.stats;
    }
}
```
Se han creado varias clases devidas de esta. Lo diferente de estas clases es que ahora los personajes tendrán un tipo de enegía, el cuál determinara la efeicacia de los combates. La nuevas clases son `Pokemon, Marvel, DragonBall y Disney`, a continuación un ejemplo:

```
export class Marvel extends Fighter<Marvel> {

    constructor(nombre: string, peso: number, altura: number,
        stats: [number, number, number, number], public readonly energia: string) {
            super(nombre, peso, altura, stats);
        }

    getEnergia(): string {
        return this.energia;
    }
}
```

### Pokedex

La clase Pokedex continua igual, con la diferencia de que ser´ña una clase genérica que soportará los diferentes personajes:

```
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
```
### Combat

Esta clase tampoco a sufrido cabios, solamente se ha modificado el el daño en base al nuevo atributo de *enegia*:

```
export class Combat{
    
    constructor(private pokedex: Pokedex<Pokemon|Marvel|DragonBall|Disney>, private figther1: string, private figther2: string,) {}

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
```

## Ejercicio 2 - DSIflix

### Stremeable

Se ha creado una interfaz genérica que tendrá los atributos de los elementos de la plataforma y los principales métodos de búsqueda basados en estos:

```
export interface Stremable<T> {
    name: string;
    year: number;
    director: string;
    gender: string;

    searchName(name: string): T[];
    searchYear(year: number): T[];
    searchDirector(name: string): T[];
    searchGender(gender:string): T[];
}
```

### BasicStremableCollection

La interfaz se ha implementado en una clase abstracta genérica y los métodos se han declarado de manera abstracta para que las clases derivadas los definan ellas mismas:

```
export abstract class BasicStremableCollection<T> implements Stremable<T> {
    constructor (protected collection: T[], public readonly name:string, public readonly year: number, public readonly director: string, public readonly gender: string) {}

    getCollection(): T[] {
        return this.collection;
    }
    getName(): string {
        return this.name;
    }
    getYear(): number {
        return this.year;
    }
    getDirector(): string {
        return this.director;
    }
    getGender(): string {
        return this.gender;
    }

    abstract searchName(name: string): T[];
    abstract searchYear(year: number): T[];
    abstract searchDirector(name: string): T[];
    abstract searchGender(gender: string): T[];
}
```

### Colecciones 

A continuación se han creado las clases que definirán colecciones de diferentes elemnetos como series, películas y documentales. Se han definido los metodos abstractos de la clase superior para realizar una búsqueda por la collección y devolver una lista en función de las coincidencias. Como tienen las misma estructura se expondrá el ejemplo de la clase `Series`:

```
export class Series extends BasicStremableCollection<Series> {
    constructor( collection: Series[], name:string, year: number, director: string, gender: string) {
        super(collection, name, year, director, gender);
    }

    searchName(name: string): Series[] {
        const s: Series[] = [];
        this.collection.forEach((collection) => {
            if (name == collection.name) {
                s.push(collection)
            }
        });
        return s;
    }
    searchYear(year: number): Series[] {
        const s: Series[] = [];
        this.collection.forEach((collection) => {
            if (year == collection.year) {
                s.push(collection)
            }
        });
        return s;
    }
    searchDirector(name: string): Series[] {
        const s: Series[] = [];
        this.collection.forEach((collection) => {
            if (name == collection.director) {
                s.push(collection)
            }
        });
        return s;
    }
    searchGender(gender: string): Series[] {
        const s: Series[] = [];
        this.collection.forEach((collection) => {
            if (gender == collection.gender) {
                s.push(collection)
            }
        });
        return s;
    }
}
```

## Ejercicio 3 - El cifrado indescifrable

Para resolver este ejercicio siguiendo los princios Solid, se han creado una clase abstracta `Cifrado` y dos clases hijas `Codificacion y Decodificacion`. En la clase padre se declara la estructura del cifrado y una función común para este, `index()` que nos permite devolver el la posición de un caracter dentro del abecedario del cifrado. De manera inicial el abecadario estará compuesto por letras de la A-Z, sin embargo se `puede modificar haciendo uso del setter correspondiente:

```
export abstract class Cifrado {
    constructor (public readonly clave: string, public readonly texto: string, protected abecedario: string[]) {
        this.abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    }
    getClave(): string {
        return this.clave;
    }
    getTexto(): string {
        return this.texto;
    }
    getAbecedario(): string[] {
        return this.abecedario;
    }
    setAbecedario(abe:string[]) {
        this.abecedario = abe;
    }

    index(s: string): number {
        let result = 0;
        this.abecedario.forEach((abecedario, n) =>{ 
            if (s == abecedario) {
                result = n;
            }
        });
        return result;
    }

}
```

El funcionamiento de la codicicación es el siguiente, sa partir de un clave y un texto, vamos iterando en las posiciones del texto y de la clave, obteniendo su posición dentro del abecedario y realizado la suma he introduciendo el cracter correspondiente. Si la clave es más corta que el texto se va reiniciando la iteración de la clave y si lo posición supera el tamaño del abecedario, se le resta el tamaño de este para calcular la nueva posición. Para la decodiciación el proceso es el mismo, pero en vez de sumar los valores de las posiciones, se resta el valor del caracter del texto con el de la clave:

```
export class Codificacion extends Cifrado {
    constructor (clave: string, texto: string, abecedario: string[]) {
        super(clave, texto, abecedario)
    }
    codificar(): string {
        let result: string = '';
        let aux: number = 0;
        let j: number = 0;
        let des: number = 0;
        for (let i = 0; i < this.texto.length; i++) {
            if (i > this.clave.length) {
                j = 0;
            }
            des = this.index(this.clave.charAt(i));
            aux = this.index(this.texto.charAt(i));
            aux = des + aux;
            if (aux > this.abecedario.length - 1) {
                aux = Math.abs(aux - (this.abecedario.length - 1))
            }
            result = result + this.abecedario[aux];
            j++;
        }
        return result;
    }

}

export class Decoficicacion extends Cifrado {
    constructor (clave: string, texto: string, abecedario: string[]) {
        super(clave, texto, abecedario)
    }
    decodificar(): string {
        let result: string = '';
        let aux: number = 0;
        let j: number = 0;
        let des: number = 0;
        for (let i = 0; i < this.texto.length; i++) {
            if (i > this.clave.length) {
                j = 0;
            }
            des = this.index(this.clave.charAt(i));
            aux = this.index(this.texto.charAt(i));
            aux = aux - des;
            if (aux > this.abecedario.length - 1) {
                aux = Math.abs(aux - (this.abecedario.length - 1))
            }
            result = result + this.abecedario[aux];
            j++;
        }
        return result;
    }
}
```