// document.getElementById('username').classList.add('is-invalid');

window.onload = onLoad;
let ip;
function onLoad() {
   fetch('https://api.ipify.org/?format=json').then((res) => (ip = res.json()));
}

const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('login');

username.addEventListener('keyup', onChangeUsername);
password.addEventListener('keyup', onChangePassword);
login.addEventListener('click', onLogin);

let usernameValue;

function onChangeUsername(event) {
   usernameValue = event.target.value;
   console.log('username');
}
function onChangePassword() {}
function onLogin() {
   if (usernameValue === '' || usernameValue === undefined) {
      username.classList.add('is-invalid');
   }
   console.log(ip);
   fetch(`http://ip-api.com/json/${ip}`)
      .then((res) => console.log(res))
      .then(console.log);
}
