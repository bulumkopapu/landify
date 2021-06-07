const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navlinks')[0];

toggleButton.addEventListener ('click', () => {
    navBarLinks.classList.toggle('active'); // adds class active to navlink class div is clicked on
});


