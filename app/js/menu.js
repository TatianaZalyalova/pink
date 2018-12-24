//Открытие и закрытие меню
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var menu  = document.querySelector('.main-nav__list');
  navMain.classList.remove('main-nav__opened');
  navMain.classList.add('main-nav__closed');
  menu.classList.remove('site-list--opened');
  menu.classList.add('site-list--closed');
  

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav__closed')) {
      navMain.classList.remove('main-nav__closed');
      navMain.classList.add('main-nav__opened');
    } else {
      navMain.classList.add('main-nav__closed');
      navMain.classList.remove('main-nav__opened');
    }

     if (menu.classList.contains('site-list--closed')) {
      menu.classList.remove('site-list--closed');
      menu.classList.add('site-list--opened');
    } else {
      menu.classList.add('site-list--closed');
      menu.classList.remove('site-list--opened');
    }
  });

 