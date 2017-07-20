export class RomanConverter{

    constructor(){
        this.roman_numerals = {
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
}