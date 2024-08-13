import './index.css'


document.querySelector('.burger-menu').addEventListener('click', function () {
    document.querySelector('.side-navbar').classList.toggle('side-navbar-open');
  });
  
  const burgerMenu = document.querySelector('.burger-menu');
  
  burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active');
  });