import 'mocha';
import {expect} from 'chai';;
import { Codificacion } from "../src/ejercicio-3/cifrado";
import {Decodificacion } from "../src/ejercicio-3/cifrado";

let cod = new Codificacion('BC', 'HOLA', []);
let decod = new Decodificacion('BC', 'IQMC', []);
describe('Test clase COdificacion y descoficacion', () => {
    
    it ('Codificacion', () => {
        expect(cod.codificar()).to.be.deep.equal('IQMC');
    });
    it ('Descodificion', () => {
        expect(decod.decodificar()).to.be.deep.equal('HOLA');
    });
    
});
