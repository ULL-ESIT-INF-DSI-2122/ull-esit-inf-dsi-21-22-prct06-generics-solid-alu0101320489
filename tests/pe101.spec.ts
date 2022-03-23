import 'mocha';
import {expect} from 'chai';
import {Searchable} from '../pe101/interface'
import {Collectable} from '../pe101/interface'
import {SearchableCollection} from '../pe101/searchableCol'
import {NumericSearchableCollection} from '../pe101/searchableCol'
import {StringSearchableCollection} from '../pe101/searchableCol'
let NC = new NumericSearchableCollection ([1,2,3,4,4,4]);
let SC = new StringSearchableCollection (['aaaa','eeee','aeoe', 'eaa']);
describe('Test clase NumericSearchableCollection', () => {
    
    it ('Funcionamiento de getItem', () => {
        expect(NC.getItem(2)).to.be.deep.equal(3);
    });
    it ('Funcionamiento de getNumberOfItems', () => {
        expect(NC.getNumberOfItems()).to.be.deep.equal(6);
    });
    it ('Funcionamiento de search', () => {
        expect(NC.search(4)).to.be.deep.equal([4,4,4]);
    });
    it ('Funcionamiento de addItem', () => {
        expect(NC.addItem(4)).not.to.be.deep.equal(undefined);
    });
    it ('Funcionamiento de removeItem', () => {
        expect(NC.addItem(2)).not.to.be.deep.equal(undefined);
    });
}); 

describe('Test clase StringSearchableCollection', () => {
    
    it ('Funcionamiento de getItem', () => {
        expect(SC.getItem(2)).to.be.deep.equal('eeee');
    });
    it ('Funcionamiento de getNumberOfItems', () => {
        expect(SC.getNumberOfItems()).to.be.deep.equal(4);
    });
    it ('Funcionamiento de search', () => {
        expect(SC.search('aa')).to.be.deep.equal(['aaaa','eaa']);
    });
});