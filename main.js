window.addEventListener('load', () => document.querySelector
('.preloader').classList.add('hide-preloader'))

const Events = (()=>{
  const navbar = document.querySelector('.navbar');
  //show-hide preloader
  // window.addEventListener('load', () => document.querySelector
  // ('.preloader').classList.add('hide-preloader'))

  //add class to navbar
    window.addEventListener('scroll',() => {
      let height = document.documentElement.scrollTop||window.pageOffset;

      (height>76) ? navbar.classList.add('navbar-change')
      : navbar.classList.remove('navbar-change');
      ;
    })

})();
