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