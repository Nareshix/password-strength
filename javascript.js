const input = document.querySelector('input');
const crackingTime = document.querySelector('.cracking-time')
const displayStrength = document.querySelector('.display-strength')

let password = '';
input.addEventListener('keyup', () => {
    password = input.value;
    let result = zxcvbn(password, user_inputs=[])
    
    // chose offline_fast_hashing_1e10_per_second to expect worst case scenario
    crackingTime.textContent = result.crack_times_display.offline_fast_hashing_1e10_per_second;    


    /* result.score is good for slow hash scenario but 
     since im using fast hash scenario, I will customise
     the password strength display */
    if (result.guesses_log10 < 16.6 ){
        displayStrength.textContent = result.guesses_log10
        // displayStrength.textContent = 'Very Weak';
        displayStrength.style.color = 'red'
        crackingTime.style.color = 'red';
        input.style.color = 'red'
    }
    else if (result.guesses_log10 < 17.1){
        displayStrength.textContent = result.guesses_log10
        // displayStrength.textContent = 'Weak';
        
        //yellow
        displayStrength.style.color = 'rgb(255, 191, 0)'
        crackingTime.style.color = 'rgb(255, 191, 0)'
        input.style.color = 'rgb(255, 191, 0)'

    }    
    else if (result.guesses_log10 < 17.7){
        displayStrength.textContent = result.guesses_log10
        // displayStrength.textContent = 'Strong';
        displayStrength.style.color = 'green'
        crackingTime.style.color = 'green'
        input.style.color = 'green'

    }
    else{
        displayStrength.textContent = result.guesses_log10
        // displayStrength.textContent = 'Very Strong';
        displayStrength.style.color = 'blue'
        crackingTime.style.color = 'blue'
        input.style.color = 'blue'

    }
})
