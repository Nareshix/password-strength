const input = document.querySelector('input');
const crackingTime = document.querySelector('.cracking-time')
const displayStrength = document.querySelector('.display-strength')

let password = '';
input.addEventListener('keyup', () => {
    password = input.value;
    let result = zxcvbn(password, user_inputs=[])
    
    // chose offline_fast_hashing_1e10_per_second to expect worst case scenario
    crackingTime.textContent = result.crack_times_display.offline_slow_hashing_1e4_per_second;    


    /* result.score is good for slow hash scenario but 
     since im using fast hash scenario, ive decided to test 
     out the guess_log10 and thus gave the necessary outputs */
    if (result.guesses_log10 < 10 ){
        displayStrength.textContent = 'Very Weak';
    }
    else if (result.guesses_log10 < 11){
        displayStrength.textContent = 'Weak';
    }    
    else if (result.guesses_log10 < 11.6){
        displayStrength.textContent = 'Strong';
    }
    else{
        displayStrength.textContent = 'Very Strong';
    }
})
