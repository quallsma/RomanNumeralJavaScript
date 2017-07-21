export default class RomanConverter{

    constructor(){
        this.roman_numerals = {
            "M": 1000,
            "CM": 900,
            "D": 500,
            "CD": 400,
            "C": 100,
            "XC": 90,
            "L": 50,
            "XL": 40,
            "X": 10,
            "IX": 9,
            "V": 5,
            "IV": 4,
            "I": 1
        };
    }

    convertArabicToRoman(arabic){
        let roman = '';
        for(let x in this.roman_numerals){
            let number = this.roman_numerals[x]
            while(arabic >= number){
                roman += x;
                arabic -= number;
            }
        }
        return roman;
    }

    convertRomanToArabic(roman){
        let arabic = 0;
        let previous = 0;
        let current = 0;
        for(let x = 0; x < roman.length; x++) {
            current = this.roman_numerals[roman.charAt(x)];
            arabic += current;

            if(current > previous && previous > 0)
                arabic -= (2 * previous);

            previous = current;
        }
        return arabic;
    }
}