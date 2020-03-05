const box = document.getElementById('box');
box.style.border = '1px solid black';

document.getElementById('submit').addEventListener('click', onSubmit);

function onSubmit(event) {
   const topLeft = document.getElementById('first-property').value;
   const topRight = document.getElementById('second-property').value;
   const bottomLeft = document.getElementById('third-property').value;
   const bottomRight = document.getElementById('fourth-property').value;
   const code = document.getElementById('css-results');
   box.style.borderRadius = `${topLeft} ${topRight} ${bottomLeft} ${bottomRight}`;
   console.log(topLeft, topRight, bottomLeft, bottomRight);
   code.textContent = `
   .box { 
       border: 1px solid black; 
       border-radius: ${topLeft} ${topRight} ${bottomLeft} ${bottomRight}; 
   }`;
   event.preventDefault();
}
