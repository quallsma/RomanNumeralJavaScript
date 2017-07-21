import { expect } from 'chai';
import RomanConverter from '../index'

describe("Mocha and Chai", () => {
    it("should be working", () => {
        expect(true).to.be.true;
    });
});

/* 
        romanNumerals.put(1000, "M");
        romanNumerals.put(900, "CM");
        romanNumerals.put(500, "D");
        romanNumerals.put(400, "CD");
        romanNumerals.put(100, "C");
        romanNumerals.put(90, "XC");
        romanNumerals.put(50, "L");
        romanNumerals.put(40, "XL");
        romanNumerals.put(10 , "X");
        romanNumerals.put(9, "IX");
        romanNumerals.put(5, "V");
        romanNumerals.put(4, "IV");
        romanNumerals.put(1, "I");
*/

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

        it("Should return IV when given 4", () => {
            expect(converter.convertArabicToRoman(1989)).to.equals('MCMLXXXIX');
        });

        it("Should return MCMLXXXIX when given 1989", () => {
            expect(converter.convertArabicToRoman(4)).to.equals('IV');
        });
    });

    describe("Convert to Arabic Number", () => {
        it("Should return 1 when given I", () => {
            expect(converter.convertRomanToArabic('I')).to.equals(1);
        });

        it("Should return 5 when given V", () => {
            expect(converter.convertRomanToArabic('V')).to.equals(5);
        });

        it("Should return 4 when given IV", () => {
            expect(converter.convertRomanToArabic('IV')).to.equals(4);
        });

        it("Should return 3 when given III", () => {
            expect(converter.convertRomanToArabic('III')).to.equals(3);
        });

        it("Should return 1989 when given MCMLXXXIX", () => {
            expect(converter.convertRomanToArabic('MCMLXXXIX')).to.equals(1989);
        });
    });
});