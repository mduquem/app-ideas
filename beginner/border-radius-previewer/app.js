const box = document.getElementById('box');

document.getElementById('submit').addEventListener('click', onSubmit);
const topLeft = document.getElementById('first-property').value;
const topRight = document.getElementById('second-property').value;
const bottomLeft = document.getElementById('third-property').value;
const bottomRight = document.getElementById('fourth-property').value;
window.addEventListener(onload, () => {
   console.log('load');
});
document
   .getElementById('first-property')
   .addEventListener('keydown', onKeyDown(event, 'first'));
document
   .getElementById('second-property')
   .addEventListener('keydown', onKeyDown(event, 'second'));
document
   .getElementById('third-property')
   .addEventListener('keydown', onKeyDown(event, 'third'));

function onKeyDown(event, id) {
   console.log(`Event KeyDown: ${event}`);
   if (id === 'first') {
      box.style.borderRadius = `${event.value} ${topRight} ${bottomLeft} ${bottomRight}`;
   } else if (id === 'second') {
      box.style.borderRadius = `${topLeft} ${event.value} ${bottomLeft} ${bottomRight}`;
   } else if (id === 'third') {
      box.style.borderRadius = `${topLeft} ${topRight} ${event.value} ${bottomRight}`;
   } else {
      box.style.borderRadius = `${topLeft} ${topRight} ${bottomLeft} ${event.value}`;
   }
}

function onSubmit(event) {
   const code = document.getElementById('css-results');
   console.log(topLeft, topRight, bottomLeft, bottomRight);
   code.textContent = `
   .box { 
       border: 1px solid black; 
       border-radius: ${topLeft} ${topRight} ${bottomLeft} ${bottomRight}; 
   }`;
   event.preventDefault();
}
