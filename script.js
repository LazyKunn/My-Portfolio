//============================= Dark Mode Toggle Script =============================//
const toggleButton = document.getElementById('theme-toggle');
    
// Check if the user already chose a theme in a previous visit
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleButton.textContent = '☀️ Light Mode';
    }
}

// When the button is clicked, swap the theme
toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '🌙 Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '☀️ Light Mode';
    }
});


//============================= XXX =============================//