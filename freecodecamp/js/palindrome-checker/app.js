function palindrome(str) {
   str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   const reverse = str
      .split('')
      .reverse()
      .join('');
   console.log(str, reverse);
   if (str === reverse) {
      return true;
   }
   console.log('false');
   return false;
}

palindrome('1 eye for of 1 eye.');
