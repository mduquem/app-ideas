document.getElementById('getMeal').addEventListener('click', getMeal);

function getMeal() {
   let meal;
   console.log('clicked');
   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((res) => res.json())
      .then((data) => {
         meal = data;
         console.log(meal);

         const ingredients = [];
         // Get all ingredients from the object. Up to 20
         for (let i = 1; i <= 20; i++) {
            if (meal.meals[0][`strIngredient${i}`]) {
               ingredients.push(
                  `${meal.meals[0][`strIngredient${i}`]} - ${
                     meal.meals[0][`strMeasure${i}`]
                  }`
               );
            } else {
               // Stop if no more ingredients
               break;
            }
         }

         console.log(ingredients);

         document.getElementById('output').innerHTML = `
          <div class="card card-body">
            <div class="row">
              
              <div class="col-md-6">
            
              <img style="width: 500px; height: auto" alt="recipe" src=${
                 meal.meals[0].strMealThumb
              } />
           
            
           
            
          </div>
          <div class="col-md-6">
           <h1 class="mt-3"> ${meal.meals[0].strMeal}</h1>
           <ul>
              ${ingredients.map((ing) => `<li>${ing}</li>`).join('')}
            </ul>
          
           
          </div>
            </div>
          <div class="row mt-5">
              <div class="col-md-12">
              <h5>${meal.meals[0].strInstructions}</h5>
              </div>
          </div>
          </div>
  
         `;
      });
}
