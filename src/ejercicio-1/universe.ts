import { Fighter } from "./fighter";
export class Pokemon extends Fighter<Pokemon> {

    constructor(nombre: string, peso: number, altura: number,
        stats: [number, number, number, number], public readonly energia: string) {
            super(nombre, peso, altura, stats);
        }

    getEnergia(): string {
        return this.energia;
    }
    
}

export class Marvel extends Fighter<Marvel> {

    constructor(nombre: string, peso: number, altura: number,
        stats: [number, number, number, number], public readonly energia: string) {
            super(nombre, peso, altura, stats);
        }

    getEnergia(): string {
        return this.energia;
    }
}

export class DragonBall extends Fighter<DragonBall> {

    constructor(nombre: string, peso: number, altura: number,
        stats: [number, number, number, number], public readonly energia: string) {
            super(nombre, peso, altura, stats);
        }

    getEnergia(): string {
        return this.energia;
    }
}

export class Disney extends Fighter<Disney> {

    constructor(nombre: string, peso: number, altura: number,
        stats: [number, number, number, number], public readonly energia: string) {
            super(nombre, peso, altura, stats);
        }

    getEnergia(): string {
        return this.energia;
    }
}