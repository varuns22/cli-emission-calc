const co2 = require('../service/caluclator-service');

var assert = require('assert');

describe('Calculator Service', function () {
    it('co2 equivalent with undefined values', function () {
        assert.strictEqual('507.7kg', co2.calculateEmission('large-petrol-car', 1800.5, undefined, undefined));
    });
    it('co2 equivalent with km and undefined values', function () {
        assert.strictEqual('2.6kg', co2.calculateEmission('medium-diesel-car', 15, 'km', undefined));
    });
    it('co2 equivalent with m and undefined values', function () {
        assert.strictEqual('87g', co2.calculateEmission('train', 14500, 'm', undefined));
    });
    it('co2 equivalent with undefined and g values', function () {
        assert.strictEqual('87000g', co2.calculateEmission('train', 14500, undefined, 'g'));
    });
    it('co2 equivalent with undefined and kg values', function () {
        assert.strictEqual('507.7kg', co2.calculateEmission('large-petrol-car', 1800.5, undefined, 'kg'));
    });
    it('co2 equivalent with m and g values', function () {
        assert.strictEqual('87g', co2.calculateEmission('train', 14500, 'm', 'g'));
    });
    it('co2 equivalent with m and kg values', function () {
        assert.strictEqual('0.1kg', co2.calculateEmission('train', 14500, 'm', 'kg'));
    });
    it('co2 equivalent with km and g values', function () {
        assert.strictEqual('87000g', co2.calculateEmission('train', 14500, 'km', 'g'));
    });
    it('co2 equivalent with km and kg values', function () {
        assert.strictEqual('2.6kg', co2.calculateEmission('medium-diesel-car', 15, 'km', 'kg'));
    });
    
    
    it('Transportation mode error for undefined value', done => {
        assert.throws(
            () => co2.calculateEmission(undefined, 14500, 'm', undefined),
            /Transport Mode Cannot be null/
        );
        done();
    });
    it('Transportation mode error for null value', done => {
        assert.throws(
            () => co2.calculateEmission(null, 14500, 'm', undefined),
            /Transport Mode Cannot be null/
        );
        done();
    });
    it('Transportation mode error for empty value', done => {
        assert.throws(
            () => co2.calculateEmission('', 14500, 'm', undefined),
            /Transport Mode Cannot be null/
        );
        done();
    });
     it('Transportation mode error for random value', done => {
        assert.throws(
            () => co2.calculateEmission('airplane', 14500, 'm', undefined),
            /Transport Mode is not defined in Configuration/
        );
        done();
    });
    it('Distance travelled error for undefined value', done => {
        assert.throws(
            () => co2.calculateEmission('train', undefined, 'm', undefined),
            /Distance travelled is required/
        );
        done();
    }); 
    it('Distance travelled error for null value', done => {
        assert.throws(
            () => co2.calculateEmission('train', null, 'm', undefined),
            /Distance travelled is required/
        );
        done();
    });  
    it('Distance travelled error for empty value', done => {
        assert.throws(
            () => co2.calculateEmission('train','', 'm', undefined),
            /Distance travelled is required/
        );
        done();
    });  
    it('Distance travelled error for random value', done => {
        assert.throws(
            () => co2.calculateEmission('train', 'xyz', 'm', undefined),
            /Distance travelled should be a number/
        );
        done();
    });  
    it('Units of Distance error with random value', done => {
        assert.throws(
            () => co2.calculateEmission('train', 14500, 'abc', undefined),
            /Unit of Distance is not defined in Configuration/
        );
        done();
    });  
        it('Output error with random value', done => {
        assert.throws(
            () => co2.calculateEmission('train', 14500, 'm', 'kggg'),
            /Output is not defined in Configuration/
        );
        done();
    });  
          
    
});