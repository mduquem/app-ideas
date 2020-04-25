function convertToRoman(num) {
   const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   const romans = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
   ];

   let result = '';

   for (let index = 0; index < decimals.length; index++) {
      while (decimals[index] <= num) {
         result += romans[index];
         num -= decimals[index];
      }
   }

   return result;
}
