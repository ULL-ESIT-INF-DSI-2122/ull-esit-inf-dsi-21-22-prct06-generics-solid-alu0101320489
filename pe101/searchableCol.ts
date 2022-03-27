import {Searchable} from '../pe101/interface'
import {Collectable} from '../pe101/interface'
/**
 * Clase abstracta que define un colección buscable y que implementa dos interfaces
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
    /**
     * 
     * @param collection Array que almacena la colección
     */
    constructor(protected collection: T[]) {}
    /**
     * Método que añade un nuevo elemneto
     * @param item Elemento a añadir
     */
    addItem(item: T): void{
        this.collection.push(item);
    }
    /**
     * Método que obtiene un elemento
     * @param n Indice a buscar
     */
    getItem(n: number): T|undefined{
        return this.collection[n];
    }
    /**
     * Método que elimina un elemneto
     * @param n Indice a eliminar
     */
    removeItem(n: number): void{
        this.collection.splice(n, 1);
    }
    /**
     * Método que devuelve el número de elemtos de la colección
     */
    getNumberOfItems(): number{
        return this.collection.length;
    }

    abstract search(term: T): T[];
}

export class NumericSearchableCollection extends SearchableCollection<number> {
    constructor(collection: number[]) {
        super(collection);
    }
    /**
     * Método buscar un número concreto y devolverá un array con todas las ocurrencias de dicho número en la colección
     * @param term Elemento a buscar
     */
    search(term: number): number[] {
        let result: number[] = [];
        for (let i = 0; i < this.getNumberOfItems(); i++) {
            if (term == this.collection[i]) {
                result.push(term);
            }
        }
        return result;
    }
}

export class StringSearchableCollection extends SearchableCollection<string> {
    constructor(collection: string[]) {
        super(collection);
    }
    search(term: string): string[]{
        let result: string[] = [];
        for (let i = 0; i < this.getNumberOfItems(); i++) {
            if (this.collection[i].includes(term)) {
                result.push(this.collection[i]);
            }
        }
        return result;
    }
}