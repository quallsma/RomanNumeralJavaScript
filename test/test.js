import { expect } from 'chai';
import { RomanConverter } from '../index'

describe("Mocha and Chai", () => {
    it("should be working", () => {
        expect(true).to.be.true;
    });
});
let converter = new RomanConverter();
describe("Roman Numeral Converter ", () => {
    describe("Convert to Roman Numeral", () => {
        it("Should return I when given 1", () => {
            expect(converter.convertArabicToRoman(1)).to.equals('I');
        });

        it("Should return III when given 3", () => {
            expect(converter.convertArabicToRoman(3)).to.equals('III');
        });

        it("Should return V when given 5", () => {
            expect(converter.convertArabicToRoman(5)).to.equals('V');
        });
    });
});