// Declare variables
const input = document.getElementById('input');
const output = document.getElementById('output');
const convert = document.getElementById('convert');

// Add Event Listeners
input.addEventListener('keyup', () => {});

convert.addEventListener('click', onInputChange);

let result = 0;

let number;
// Declare functions
function onInputChange() {
   event.preventDefault();
   let inputString = event.target.value.toUpperCase();

   for (let index = 0; index < array.length; index++) {
      const element = array[index];
   }

   if (letter === 'I') {
      number = 1;
      result = result + number;
      console.log(result);
   } else if (letter === 'V') {
      number = 5;
      result = result + number;
   } else if (letter === 'V') {
      number = 10;
      result = result + number;
   } else if (letter === 'V') {
      number = 50;
      result = result + number;
   } else if (letter === 'V') {
      number = 100;
      result = result + number;
   } else if (letter === 'V') {
      number = 500;
      result = result + number;
   } else if (letter === 'V') {
      number = 1000;
      result = result + number;
   } else {
      const div = document.createElement('div');
      div.className = 'alert alert-danger';
      div.setAttribute('id', 'alert');
      div.innerHTML = 'Please enter a valid roman number';
      const card = document.getElementById('beforeAlert');
      card.insertBefore(div, card.firstElementChild);
      setTimeout(() => {
         document.getElementById('alert').remove();
      }, 3000);
      output.innerHTML = `<h5 class="text-dark">Not Valid</h5>`;
   }

   console.log(result, number);

   output.innerHTML = `<h5 class="text-dark">${result}</h5>`;
}
