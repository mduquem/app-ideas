// Add aditional styling
const inputs = document.querySelectorAll('input');
for (let index = 0; index < inputs.length; index++) {
   const element = inputs[index];
   element.classList.add('mb-3');
}

document.getElementById('submit').addEventListener('click', onSubmit);

function onSubmit(event) {
   const nameInput = document.getElementById('name').value;
   const timeInput = document.getElementById('time').value;
   const dateInput = new Date(
      Date.parse(
         document.getElementById('date').value,
         timeInput ? timeInput : '00:00:00'
      )
   );

   if (nameInput === '') {
      const card = document.getElementById('card');
      const title = document.getElementById('title');
      const div = document.createElement('div');
      div.innerHTML = 'You must enter a valid event name';
      div.className = 'alert alert-danger';
      card.insertBefore(div, title);
      setTimeout(function() {
         div.remove();
      }, 3000);
   } else if (dateInput < new Date() || !dateInput.getDate()) {
      const card = document.getElementById('card');
      const title = document.getElementById('title');
      const div = document.createElement('div');
      div.innerHTML =
         'Date has passed already. Please enter a valid event date';
      div.className = 'alert alert-danger';
      card.insertBefore(div, title);
      setTimeout(function() {
         div.remove();
      }, 3000);
   } else {
      const countdownElement = document.getElementById('date');
      const countdownContent = document.createElement('div');
      countdownContent.innerHTML = `
    ${nameInput}: ${dateInput.getDate()} / ${dateInput.getMonth()} / ${dateInput.getFullYear()} - ${dateInput.getHours()} : ${dateInput.getMinutes()} : ${dateInput.getSeconds()}
    `;

      countdownElement.insertBefore(
         countdownContent,
         countdownElement.firstElementChild
      );

      const result = document.getElementById('countdown');

      setInterval(function() {
         const distance = dateInput - new Date().getTime();
         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );
         const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
         );
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
         result.innerHTML = `
     <p>
         ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds
     </p>`;
      }, 1000);
   }

   event.preventDefault();
}
