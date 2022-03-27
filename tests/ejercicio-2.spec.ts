import 'mocha';
import {expect} from 'chai';
import { BasicStremableCollection } from "../src/ejercicio-2/basicsCollection";
import { Series } from "../src/ejercicio-2/collections";

let lost = new Series([], 'Lost', 2001, 'Juan', 'Drama');
let calamar = new Series([], 'Juego del calamar', 2021, 'Yang', 'Acción');
let series = new Series([lost, calamar], '', 0, '', '');
describe('Test clase Series', () => {
    
    it ('Busqueda por nombre', () => {
        expect(series.searchName('Lost')).to.be.deep.equal([lost]);
    });
    it ('Busqueda por director', () => {
        expect(series.searchDirector('Yang')).to.be.deep.equal([calamar]);
    });
    it ('Busqueda por año', () => {
        expect(series.searchYear(2004)).to.be.deep.equal([]);
    });
    it ('Busqueda por género', () => {
        expect(series.searchGender('Drama')).to.be.deep.equal([lost]);
    });
    it ('Busqueda por género', () => {
        expect(series.searchGender('Drama')).to.be.deep.equal([lost]);
    });
});
