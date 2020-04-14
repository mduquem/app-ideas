const persons = [
   {
      id: 3,
      name: 'John Doe',
      street: 'Elm Street',
      city: 'Boston',
      state: 'MA',
      country: 'United States',
      phone: 5555555,
      birthday: '30/07/1987',
   },
   {
      id: 4,
      name: 'René',
      street: 'Calle 13',
      city: 'San Juan',
      state: 'Puerto Rico',
      country: 'United States',
      phone: 5555555,
      birthday: '30/07/1986',
   },
   {
      id: 5,
      name: 'Kara Karaliss',
      street: '14 Street',
      city: 'Miami',
      state: 'FL',
      country: 'United States',
      phone: 5555555,
      birthday: '30/07/1996',
   },
];

const list = document.getElementById('persons');

for (let index = 0; index < persons.length; index++) {
   const element = persons[index];
   const newListItem = document.createElement('li');
   newListItem.appendChild(document.createTextNode(element.name));
   newListItem.setAttribute('id', element.id);

   newListItem.style.cursor = 'pointer';
   list.insertBefore(newListItem, list.childNodes[-1]);
}

const listNodes = Array.from(document.getElementById('persons').childNodes);
for (let index = 0; index < listNodes.length; index++) {
   const element = listNodes[index];

   element.addEventListener('click', () => onClick(element.id));
}

function onClick(id) {
   removeClickedClass();
   document.getElementById(id).className = 'clicked';
   const person = persons.filter((item) => item.id === parseInt(id));
   const details = document.getElementById('details');
   for (let index = 0; index < person.length; index++) {
      const element = person[index];
      console.log(element);
   }
   details.innerHTML = `
   <p>Name: ${person[0].name}</p>
   <p>Street: ${person[0].street}</p>
   <p>City: ${person[0].city}</p>
   <p>State: ${person[0].state}</p>
   <p>Country: ${person[0].country}</p>
   <p>Phone: ${person[0].phone}</p>
   <p>Birthday: ${person[0].birthday}</p>`;
}

function removeClickedClass() {
   const list = document.getElementById('persons').childNodes;
   console.log(list);
   for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element.classList.contains('clicked')) {
         element.classList.remove('clicked');
      }
   }
}
