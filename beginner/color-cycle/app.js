document.getElementById('submit').addEventListener('click', onSubmitColors);
document.getElementById('stop').addEventListener('click', stopShow);

const box = document.getElementById('box');
box.style.border = '1px dashed black';
box.style.height = '80px';

let red;
let blue;
let green;

function onSubmitColors(event) {
   event.preventDefault();
   state = 'start';
   console.log('clicked');
   red = parseInt(document.getElementById('red').value);
   blue = parseInt(document.getElementById('blue').value);
   green = parseInt(document.getElementById('green').value);

   box.style.backgroundColor = `rgb(${red},${blue},${green})`;
}

// function changeColors(state) {
//    const time = parseInt(document.getElementById('timer').value) * 1000;
//    if (state === 'start') {
//       setInterval(function() {
//          if (red > 255) {
//             red = 0;
//          } else if (blue > 255) {
//             blue = 0;
//          } else if (green > 255) {
//             green = 0;
//          }

//          red += +1;
//          blue += 1;
//          green += 1;
//          console.log(red, blue, green);
//          box.style.backgroundColor = `rgb(${red},${blue},${green})`;
//       }, time);
//    }
// }

function stopShow(event) {
   changeColors('stop');
   console.log(state);
   event.preventDefault();
}
