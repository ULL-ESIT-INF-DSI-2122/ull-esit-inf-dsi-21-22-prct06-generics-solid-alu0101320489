import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../pe101/randomNumber '
import {RandomNumberCollection} from '../pe101/randomNumber '
let random1 = RandomNumber.getRandomNumber();
let set = new Set<number>();
//let collection = new RandomNumberCollection(set, 3);

describe('Test clase RandomNumber', () => {
    it ('Funcionamiento de random0to1', () => {
        expect((random1.random0to1())).to.be.lessThan(1);
    });
    it ('Funcionamiento de manualFloatRandom', () => {
        expect((random1.manualFloatRandom(7,10))).to.be.lessThan(10);
    });
    it ('Funcionamiento de manualIntRandom', () => {
        expect((random1.manualIntRandom(2,5))).to.be.lessThan(5);
    });
});

describe('Test clase RandomNumberCollection', () => {
    it ('Funcionamiento de Iterable', () => {
       //([...collection].forEach((num) => expect(num).to.be.lessThan(1)));
    });
});
