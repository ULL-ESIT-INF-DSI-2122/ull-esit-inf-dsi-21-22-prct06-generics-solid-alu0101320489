import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejercicio-1/fighter'
import {Pokemon} from '../src/ejercicio-1/universe'
import {Marvel} from '../src/ejercicio-1/universe'
import {DragonBall} from '../src/ejercicio-1/universe'
import {Disney} from '../src/ejercicio-1/universe'
import {Pokedex} from '../src/ejercicio-1/pokedex'

let goku = new DragonBall('Goku', 80, 180, [150, 150, 100, 110], 'yin');
let blackgoku = new DragonBall('BlackGoku', 70, 180, [170, 110, 100, 110], 'yang');
let charizard = new Pokemon('Charizard', 100, 220, [120, 90, 120, 120], 'fuego');

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
        expect(goku.getEnergia()).to.be.deep.equal('yin');
    });
    it ('Sus estadísticas deben ser (150, 150, 100, 110)', () => {
        expect(goku.getStats()).to.be.deep.equal([150, 150, 100, 110]);
    });
});

