document.getElementById('bin-number').addEventListener('keyup', onChangeInput);

function onChangeInput() {
   const input = document.getElementById('bin-number').value;
   const output = document.getElementById('dec-number');

   let result = 0;
   for (let index = 0; index < input.length; index++) {
      const element = input[index];
      currDigit = element * 2 ** (input.length - index - 1);
      result += currDigit;
   }
   output.textContent = `${result}`;
}
