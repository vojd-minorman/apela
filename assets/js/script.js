const dropdown = document.querySelector('.submenu');
const trigger = document.querySelector('li a');

trigger.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});
