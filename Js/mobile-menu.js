document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded successfully');

  const toggleBtns = document.querySelectorAll('.toggle-btn');
  const sideMenu = document.querySelector('.toggle-menu');

  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      sideMenu.classList.toggle('open');
      console.log('Toggle button clicked');
    });
  });


  // Join Button toggle 
  const groupToggleBtn = document.querySelector('.group-toggle-btn');

  groupToggleBtn.addEventListener('click', function () {
    // Toggle between btn-primary and btn-secondary classes
    groupToggleBtn.classList.toggle('btn-primary');
    groupToggleBtn.classList.toggle('btn-secondary');

    // Change the button text from Join to Leave
    groupToggleBtn.textContent = groupToggleBtn.textContent === 'Leave group' ? 'Join group' : 'Leave group';
  });
});
