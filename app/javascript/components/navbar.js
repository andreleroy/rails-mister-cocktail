const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-wagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-light-yellow');
      } else {
        navbar.classList.remove('navbar-wagon-light-yellow');
      }
    });
  }
};

export { initUpdateNavbarOnScroll };
