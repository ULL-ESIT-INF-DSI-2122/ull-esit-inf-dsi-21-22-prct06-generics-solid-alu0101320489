/*
 * Clase que genera un generador de numeros aleatorios
 */
export class RandomNumber {
    private static RandomNumber: RandomNumber;
    /**
     * Cnstructor privado para poder aplicar el formato Singleton
     */
    private constructor() {}
    /**
     * Método para generar un objeto de la clase
     */
    public static getRandomNumber(): RandomNumber {
        if (!RandomNumber.RandomNumber) {
            RandomNumber.RandomNumber = new RandomNumber();
        }
        return RandomNumber.RandomNumber;
    }
    /**
     * Método que genera un número aleatorio flotante de 0 a 1
     */
    random0to1(): number {
        return parseFloat((Math.random() * (0 - 1) + 1).toFixed(2));
    }
    /**
     * Método que genera un número aleatorio flotante de n a m
     * @param n minimo
     * @param m maximo
     */
    manualFloatRandom(n: number, m: number): number {
        return parseFloat((Math.random() * (m - n) + n).toFixed(2));
    }
    /**
     * Método que genera un número aleatorio entero de n a m
     * @param n minimo
     * @param m maximo
     */
    manualIntRandom(n: number, m: number) {
        return Math.floor(Math.random() * (m - n) + n);
    }
} 
/**
 * Clase iterable que almacena numeros con un Set
 */
export class RandomNumberCollection implements Iterable<number>{
    /**
     * 
     * @param collection Set donde se almacenan los números
     */
    private collection: Set<number>
    constructor(collection: Set<number>, private n:number) {
        let randomNumber = RandomNumber.getRandomNumber();
        for (let i = 0; i < this.n; i++) {
            this.collection.add(randomNumber.random0to1());
        }
    }
    /**
     * 
     * @param n valor a añadir
     */
    addNumber(n: number) {
        this.collection.add(n);
    }
    [Symbol.iterator](): Iterator<number> {
        return this.collection.values();
    }
}
