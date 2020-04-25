const alpha = [
   'a',
   'b',
   'c',
   'd',
   'e',
   'f',
   'g',
   'h',
   'i',
   'j',
   'k',
   'l',
   'm',
   'n',
   'o',
   'p',
   'q',
   'r',
   's',
   't',
   'u',
   'v',
   'w',
   'x',
   'y',
   'z',
];
const cipherArr = [];

function rot13(str) {
   const strArr = Array.from(str.toLowerCase());

   for (let index = 0; index < strArr.length; index++) {
      let newIndex;
      const element = strArr[index];
      const prevValueIndex = alpha.indexOf(element);
      console.log(element, prevValueIndex);

      if (prevValueIndex == -1) {
         cipherArr.push(element);
         console.log('wtf');
      } else if (prevValueIndex + 13 < alpha.length) {
         newIndex = prevValueIndex + 13;
         cipherArr.push(alpha[newIndex].toUpperCase());
         console.log(alpha[newIndex], newIndex);
      } else {
         newIndex = 13 - (alpha.length - prevValueIndex);
         cipherArr.push(alpha[newIndex].toUpperCase());
         console.log(alpha[newIndex], newIndex);
      }
   }
   console.log(cipherArr);
   const result = cipherArr.join('').toString();

   return result;
}

console.log(rot13('SERR PBQR PNZC'));
