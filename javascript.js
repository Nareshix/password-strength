const input = document.querySelector('input');
const crackingTime = document.querySelector('.cracking-time')
const displayStrength = document.querySelector('.display-strength')

let password = '';
input.addEventListener('keyup', () => {
    password = input.value;
    let result = zxcvbn(password, user_inputs=[])
    
    // chose offline_fast_hashing_1e10_per_second to expect worst case scenario
    crackingTime.textContent = result.crack_times_display.offline_slow_hashing_1e4_per_second;    
    switch (result.score) {
        case 0:
            displayStrength.textContent = 'Very Weak'
            break;
        case 1:
            displayStrength.textContent = 'Weak'
            break;
        case 3:
            displayStrength.textContent = 'Strong'
            break;
        case 4:
            displayStrength.textContent = 'Very Strong'
            break;
        }
    
     
})
