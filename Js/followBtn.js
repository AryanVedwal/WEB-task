const groupToggleButtons = document.querySelectorAll('.r-follow-btn');

// Add click event listener to each button using arrow function
groupToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the text content using ternary operator
        button.textContent = button.textContent === 'Followed' ? 'Follow' : 'Followed';

        // Toggle the 'clicked' class using toggle method
        button.classList.toggle('clicked');
    });
});