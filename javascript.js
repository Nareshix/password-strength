const input = document.querySelector('input');
const crackingTime = document.querySelector('.cracking-time')
const displayStrength = document.querySelector('.display-strength')

let password = '';
input.addEventListener('keyup', () => {
    password = input.value;
    let result = zxcvbn(password)
})
