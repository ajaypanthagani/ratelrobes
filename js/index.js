document.addEventListener('DOMContentLoaded', function() {
    // Select the logo element
    const logo = document.querySelector('.logo');
    
    // Detect when shine animation ends
    logo.addEventListener('animationend', function(event) {
        // Check if the ended animation is 'shine'
        if (event.animationName === 'shine') {
            // Select the img element inside .logo
            const img = logo.querySelector('img');
            // Make the img visible and fade it in
            img.style.visibility = 'visible';
            img.style.opacity = '1';
        }
    });
});
