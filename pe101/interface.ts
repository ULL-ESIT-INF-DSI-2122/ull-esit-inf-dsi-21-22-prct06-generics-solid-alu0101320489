/**
 * Interfaz que define coleccionable
 */
export interface Collectable<T> {
    addItem(item: T): void;
    getItem(n: number): T|undefined;
    removeItem(n: number): void;
    getNumberOfItems(): number;
}
/**
 * Interfaz para definir algo buscable
 */
export interface Searchable<T> {
    search(term: T): T[];
}

