const input = document.getElementById('json-input');
input.addEventListener('keyup', onChangeInput);

function onChangeInput(event) {
   console.log(event.target.value);
}

const submit = document.getElementById('submit-btn');
submit.addEventListener('click', onSubmit);

function onSubmit(event) {
   event.preventDefault();
   console.log('button clicked');
}
