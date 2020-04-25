const btn = document.getElementById('btn-query');
const output = document.getElementById('output');

const fetchData = () => {
   fetch('https://api.kanye.rest')
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         console.log(data);
         output.innerHTML = `<h3>"${data.quote}"</h3>`;
      });
};

btn.addEventListener('click', () => {
   fetchData();
   console.log('hola');
});

window.onload = fetchData();
