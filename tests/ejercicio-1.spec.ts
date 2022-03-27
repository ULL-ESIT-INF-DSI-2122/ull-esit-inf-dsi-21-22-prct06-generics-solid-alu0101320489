import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejecicio-1/fighter'
import {Pokemon} from '../src/ejecicio-1/universe'
import {Marvel} from '../src/ejecicio-1/universe'
import {DragonBall} from '../src/ejecicio-1/universe'
import {Disney} from '../src/ejecicio-1/universe'
import {Pokedex} from '../src/ejecicio-1/pokedex'

let goku = DragonBall('Goku', 80, 180, [150, 150, 100, 110], 'yin');
let blackgoku = DragonBall('BlackGoku', 70, 180, [170, 110, 100, 110], 'yang');
let charizard = Pokemon('Charizard', 100, 220, [120, 90, 120, 120], 'fuego');

let pokedex = [goku, charizard, blackgoku];


describe('Test clase Fighter y derivadas', () => {
    
    it ('Nombre del personaje debe ser Goku', () => {
        expect(goku.getNombre()).to.be.deep.equal('Goku');
    });
    it ('El peso debe ser 80', () => {
        expect(goku.getPeso()).to.be.deep.equal(80);
    });
    it ('La altura debe ser 180', () => {
        expect(goku.getAltura()).to.be.deep.equal(180);
    });
    it ('La energia debe ser yin', () => {
        expect(goku.getTipo()).to.be.deep.equal('yin');
    });
    it ('Sus estadísticas deben ser (150, 150, 100, 110)', () => {
        expect(goku.getStats()).to.be.deep.equal([150, 150, 100, 110]);
    });
});

describe('Test clase Pokedex', () => {
    
    it ('La pokedex debe ser un objeto', () => {
        expect(typeof(pokedex)).to.be.deep.equal('object');
    });
    it ('Nombre del primer personaje debe ser Vaporeon', () => {
        expect(pokedex.getPokemonName(0)).to.be.deep.equal('Vaporeon');
    });
    it ('Nombre del segundo pokemon debe ser Infernape', () => {
        expect(pokedex.getPokemonName(1)).to.be.deep.equal('Infernape');
    });
}); 


