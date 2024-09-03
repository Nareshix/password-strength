const input = document.querySelector('input');
const crackingTime = document.querySelector('.cracking-time')
const displayStrength = document.querySelector('.display-strength')
const generatePasswordButton = document.querySelector('.generate-password')


let generatePassword = (
    length = 20,
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  ) =>
    Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => characters[x % characters.length])
      .join('')

let displayContents = () => {
    let password = input.value;
    let result = zxcvbn(password, user_inputs=[])
    
    // Displays time taken to crack password
    crackingTime.textContent = result.crack_times_display.offline_fast_hashing_1e10_per_second;    


    /* result.score is good for slow hash scenario but 
     since im using fast hash scenario, I will customise
     the password strength display */
    if (result.guesses_log10 < 16.6 ){
        displayStrength.textContent = 'Very Weak';
        displayStrength.style.color = 'red'
        crackingTime.style.color = 'red';
        input.style.color = 'red'
    }
    else if (result.guesses_log10 < 17.1){
        displayStrength.textContent = 'Weak';
        
        //yellow
        displayStrength.style.color = 'rgb(255, 191, 0)'
        crackingTime.style.color = 'rgb(255, 191, 0)'
        input.style.color = 'rgb(255, 191, 0)'

    }    
    else if (result.guesses_log10 < 17.7){
        displayStrength.textContent = 'Strong';
        displayStrength.style.color = 'green'
        crackingTime.style.color = 'green'
        input.style.color = 'green'

    }
    else{
        displayStrength.textContent = 'Very Strong';
        displayStrength.style.color = 'blue'
        crackingTime.style.color = 'blue'
        input.style.color = 'blue'
    }
}

generatePasswordButton.addEventListener('click', () => {
    input.value = generatePassword();
    input.focus();
})

input.addEventListener('keyup', () => {

})
