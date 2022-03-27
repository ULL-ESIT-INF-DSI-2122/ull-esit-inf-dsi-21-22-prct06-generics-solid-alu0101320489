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