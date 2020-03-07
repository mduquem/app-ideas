document.getElementById('submit').addEventListener('click', onSubmitColors);
document.getElementById('stop').addEventListener('click', stopShow);

const box = document.getElementById('box');
box.style.border = '1px dashed black';
box.style.height = '80px';

let red;
let blue;
let green;

function onSubmitColors(event) {
   state = 'start';
   console.log('clicked');
   red = parseInt(document.getElementById('red').value);
   blue = parseInt(document.getElementById('blue').value);
   green = parseInt(document.getElementById('green').value);

   box.style.backgroundColor = `rgb(${red},${blue},${green})`;

   changeColors('start');
   event.preventDefault();
}

function changeColors(state) {
   const redIncr = parseInt(document.getElementById('red-increment').value);
   const blueIncr = parseInt(document.getElementById('blue-increment').value);
   const greenIncr = parseInt(document.getElementById('green-increment').value);
   const time = parseInt(document.getElementById('timer').value) * 1000;
   if (state === 'start') {
      setInterval(function() {
         if (red > 255) {
            red = 0;
         } else if (blue > 255) {
            blue = 0;
         } else if (green > 255) {
            green = 0;
         }

         red += redIncr;
         blue += blueIncr;
         green += greenIncr;
         console.log(red, blue, green);
         box.style.backgroundColor = `rgb(${red},${blue},${green})`;
      }, time);
   }
}

function stopShow(event) {
   changeColors('stop');
   console.log(state);
   event.preventDefault();
}
