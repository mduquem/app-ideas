const output = document.getElementById('output');
const quiz = [
   {
      id: 1,
      question: 'Which of the following answers contains valid CSS syntax?',
      wrongOne: '(margin): top',
      wrongTwo: 'MarginTop: 20px;',
      wrongThree: 'marginTop: 100%',
      correct: 'margin-top: 20px;',
   },
   {
      id: 2,
      question: 'Which of the following answers contains valid CSS syntax?',
      wrongOne: '(margin): top',
      wrongTwo: 'MarginTop: 20px;',
      wrongThree: 'marginTop: 100%',
      correct: 'margin-top: 20px;',
   },
   {
      id: 3,
      question: 'Which of the following answers contains valid CSS syntax?',
      wrongOne: '(margin): top',
      wrongTwo: 'MarginTop: 20px;',
      wrongThree: 'marginTop: 100%',
      correct: 'margin-top: 20px;',
   },
   {
      id: 4,
      question: 'Which of the following answers contains valid CSS syntax?',
      wrongOne: '(margin): top',
      wrongTwo: 'MarginTop: 20px;',
      wrongThree: 'marginTop: 100%',
      correct: 'margin-top: 20px;',
   },
];
let htmlMarkup = [];
document.getElementById('start-game').addEventListener('click', () => {
   for (let index = 0; index < quiz.length; index++) {
      const element = quiz[index];
      const markup = `
      <div className="row">
      <div className="col-md-12">
   
      <h3>Question ${quiz[0].id} Of 4</h3>
      
      
      
      </div>
      
      
      
      </div>
     
     
     `;

      htmlMarkup.push(element);
   }
   console.log(htmlMarkup);
});

// output.innerHTML = `<div class="row">${quiz[0].id}</div>`;
