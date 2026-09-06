//============================= Theme Toggle & SVG Icon Script =============================//
const toggleButton = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

// Function to update the icons based on the theme
function updateIcons(theme) {
    if (theme === 'light') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        // Dark theme is the default
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}

// 1. Check if the user already chose a theme in a previous visit
const currentTheme = localStorage.getItem('theme') || 'dark'; // Dark is default
document.documentElement.setAttribute('data-theme', currentTheme);
updateIcons(currentTheme);

// 2. When the button is clicked, swap the theme and icons
toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    // If current theme is light, switch to dark
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateIcons('dark');
    } 
    // Otherwise (it's currently dark), switch to light
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateIcons('light');
    }
});


//============================= XXX =============================//