document.addEventListener('DOMContentLoaded', function() {
    // Select the logo element
    const logo = document.querySelector('.logo');
    const caption = document.querySelector('.caption')
    
    // Detect when shine animation ends
    logo.addEventListener('animationend', function(event) {
        // Check if the ended animation is 'shine'
        if (event.animationName === 'shine-right') {
            // Select the img element inside .logo
            const img = logo.querySelector('img');
            const text = caption.querySelector('h2')
            // Make the img visible and fade it in
            img.style.visibility = 'visible';
            img.style.opacity = '1';
            text.style.visibility = 'visible';
            text.style.opacity = '1';
        }
    });
});
