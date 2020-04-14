document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
function start() {
   const dataLight = document.querySelectorAll('#light');
   console.log(dataLight);
   dataLight.forEach(function (item) {
      item.classList.add('light');
   });
   const dataNormal = document.querySelectorAll('#normal');
   dataNormal.forEach(function (item) {
      item.classList.add('normal');
   });
}

function stop() {
   const dataLight = document.querySelectorAll('#light');
   console.log(dataLight);
   dataLight.forEach(function (item) {
      item.classList.remove('light');
   });
   const dataNormal = document.querySelectorAll('#normal');
   dataNormal.forEach(function (item) {
      item.classList.remove('normal');
   });
}

document.querySelector('.card-body').onscroll = onScrollContainer;

function onScrollContainer() {
   console.log('scrolled inside container');
}
