const fetchRandomJoke = () => {
   fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         console.log(data);
      })
      .catch((error) => console.log(errror));
};
