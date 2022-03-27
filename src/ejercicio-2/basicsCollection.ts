import { Stremable } from "./streamable";

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
