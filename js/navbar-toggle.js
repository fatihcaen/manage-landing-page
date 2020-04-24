let toggler = document.querySelector('.toggler');
let togglerIcon = document.querySelector('.toggler img');
let mobileNav = document.querySelector('.nav-links-m');
let navOpen = false;
mobileNav.style.display = 'none';

if (width <= 768) {
  toggler.addEventListener('click', function () {
    if (!navOpen) {
      mobileNav.style.display = 'flex';
      togglerIcon.src = 'assets/icon-close.svg';
      navOpen = true;
    } else {
      mobileNav.style.display = 'none';
      togglerIcon.src = 'assets/icon-hamburger.svg';
      navOpen = false;
    }
  });
}