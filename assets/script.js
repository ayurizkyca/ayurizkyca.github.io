const menuToggle = document.querySelector('.menu-toggle input');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', function(){
    navbar.classList.toggle('slide');
});