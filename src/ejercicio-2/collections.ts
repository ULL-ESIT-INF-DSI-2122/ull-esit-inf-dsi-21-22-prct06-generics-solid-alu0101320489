import { BasicStremableCollection } from "./basicsCollection";

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

export class Peliculas extends BasicStremableCollection<Peliculas> {
    constructor( collection: Peliculas[], name:string, year: number, director: string, gender: string) {
        super(collection, name, year, director, gender);
    }

    searchName(name: string): Peliculas[] {
        const s: Peliculas[] = [];
        this.collection.forEach((collection) => {
            if (name == collection.name) {
                s.push(collection)
            }
        });
        return s;
    }
    searchYear(year: number): Peliculas[] {
        const s: Peliculas[] = [];
        this.collection.forEach((collection) => {
            if (year == collection.year) {
                s.push(collection)
            }
        });
        return s;
    }
    searchDirector(name: string): Peliculas[] {
        const s: Peliculas[] = [];
        this.collection.forEach((collection) => {
            if (name == collection.director) {
                s.push(collection)
            }
        });
        return s;
    }
    searchGender(gender: string): Peliculas[] {
        const s: Peliculas[] = [];
        this.collection.forEach((collection) => {
            if (gender == collection.gender) {
                s.push(collection)
            }
        });
        return s;
    }
}

export class Documentales extends BasicStremableCollection<Documentales> {
    constructor( collection: Documentales[], name:string, year: number, director: string, gender: string) {
        super(collection, name, year, director, gender);
    }

    searchName(name: string): Documentales[] {
        const s: Documentales[] = [];
        this.collection.forEach((collection) => {
            if (name == collection.name) {
                s.push(collection)
            }
        });
        return s;
    }
    searchYear(year: number): Documentales[] {
        const s: Documentales[] = [];
        this.collection.forEach((collection) => {
            if (year == collection.year) {
                s.push(collection)
            }
        });
        return s;
    }
    searchDirector(name: string): Documentales[] {
        const s: Documentales[] = [];
        this.collection.forEach((collection) => {
            if (name == collection.director) {
                s.push(collection)
            }
        });
        return s;
    }
    searchGender(gender: string): Documentales[] {
        const s: Documentales[] = [];
        this.collection.forEach((collection) => {
            if (gender == collection.gender) {
                s.push(collection)
            }
        });
        return s;
    }
}