// Check if the user has previously selected a mode
let darkMode = localStorage.getItem('darkMode'); 

// If the user has selected dark mode, add the class to the body
if (darkMode === 'dark') {
  document.body.classList.add('dark-mode');
}

// Add a click event listener to the toggle button
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', switchTheme, false);

// Function to switch the theme
function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'light');
  }
}
