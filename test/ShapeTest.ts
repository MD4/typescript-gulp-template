/// <reference path="../typings/mocha/mocha.d.ts" />
import {Square} from '../src/shapes/Square';

describe('Calculator', () => {
    var square:Square;

    beforeEach(function () {
        square = new Square(42);
    });

    describe('#getSurface', () => {
        it('should compute the right surface', () => {
            var result:number = square.getSurface();
            var expected = 42 * 42;
            if (result !== expected) {
                throw new Error('Expected ' + expected + ' but was ' + result);
            }
        });
    });
});