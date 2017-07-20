export class RomanConverter{
    convertArabicToRoman(num){
        if (num == 5)
            return 'V';
        return 'I'.repeat(num);
    }
}