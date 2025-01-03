document.addEventListener('DOMContentLoaded', () => {

    // buttons
    const heroBtn = document.querySelector('.hero__btn');
    const headerMenuBtn = document.getElementById('header-menu');

    //header links
    const aboutLink  = document.getElementById('about');
    const mobileAppLink = document.getElementById('mobile-app-link')
    const coffeeLink = document.getElementById('fav-coffee-link');
    const contactLink = document.getElementById('contact-link');

    // sections
    const menu = document.querySelector('.menu');
    const hero = document.getElementById('hero');
    const favCoffee = document.getElementById('favCoffee');
    const about = document.getElementById('about');
    const mobileApp = document.getElementById('mobile-app');

    //category buttons
    const coffeeBtn = document.getElementById('coffee-btn');
    const teaBtn = document.getElementById('tea-btn');
    const dessertBtn = document.getElementById('dessert-btn');

    //category groups
    const menuDrinks = document.getElementById('menu-drinks');
    const menuTea = document.getElementById('menu-tea');
    const menuDesserts = document.getElementById('menu-desserts');

    const coffeeMenuFirstFlex = document.getElementById('coffee-drinks-first-line');
    const coffeeMenuSecondFlex = document.getElementById('coffee-drinks-second-line');

    const dessertMenuFirstFlex = document.getElementById('desserts-first-flex');
    const dessertMenuSecondFlex = document.getElementById('desserts-second-flex');

    const coffeeRefreshBtn = document.getElementById('coffee-refresh-button');
    const dessertsRefreshBtn = document.getElementById('desserts-refresh-button');

    headerMenuBtn.addEventListener('click', () => {
        if(menu.style.display === 'none') {
            menu.style.display = 'flex';
            coffeeBtn.classList.add('active');
            hero.style.display = "none";
            favCoffee.style.display = "none";
            mobileApp.style.display = "none";
            about.style.display = "none";
        } else {
            menu.style.display = "none";
        }
    })
    
    heroBtn.addEventListener('click', () => {
        if(menu.style.display === 'none') {
            menu.style.display = 'flex';
            coffeeBtn.classList.add('active');
            hero.style.display = "none";
            favCoffee.style.display = "none";
            mobileApp.style.display = "none";
            about.style.display = "none";
        } else {
           menu.style.display = "none";
        }
    });

    coffeeBtn.addEventListener('click', () => {
        coffeeBtn.classList.toggle('active');
        teaBtn.classList.remove('active');
        dessertBtn.classList.remove('active');

        menuDrinks.classList.remove('hidden');
        menuTea.classList.add('hidden');
        menuDesserts.classList.add('hidden');

        // coffeeMenuFirstFlex.classList.add('drinks__line--hidden');
        // coffeeMenuSecondFlex.classList.add('drinks__line--hidden');

        dessertMenuFirstFlex.classList.add('drinks__line--hidden');
        dessertMenuSecondFlex.classList.add('drinks__line--hidden');
    })

    teaBtn.addEventListener('click', () => {
        teaBtn.classList.toggle('active');
        coffeeBtn.classList.remove('active');
        dessertBtn.classList.remove('active');
        coffeeRefreshBtn.style.display =  'none';

        menuDrinks.classList.add('hidden');
        menuDesserts.classList.add('hidden');
        menuTea.classList.remove('hidden');

        dessertMenuFirstFlex.classList.add('drinks__line--hidden');
        dessertMenuSecondFlex.classList.add('drinks__line--hidden');
      });

      dessertBtn.addEventListener('click', () => {
        dessertBtn.classList.toggle('active');
        coffeeBtn.classList.remove('active');
        teaBtn.classList.remove('active');
        coffeeRefreshBtn.style.display =  'none';

        menuDrinks.classList.add('hidden');
        menuTea.classList.add('hidden');
        menuDesserts.classList.remove('hidden');

        coffeeMenuFirstFlex.classList.add('drinks__line--hidden');
        coffeeMenuSecondFlex.classList.add('drinks__line--hidden');
     })

     //  hidden menu 768px hidden menu

    coffeeRefreshBtn.addEventListener('click', () => {
        if(coffeeMenuFirstFlex.classList.contains('drinks__line--hidden')) {
        coffeeMenuFirstFlex.classList.remove('drinks__line--hidden');
        coffeeMenuSecondFlex.classList.add('drinks__line--hidden');
        } else {
            coffeeMenuFirstFlex.classList.add('drinks__line--hidden');
            coffeeMenuSecondFlex.classList.remove('drinks__line--hidden');
        }
    });

    dessertsRefreshBtn.addEventListener('click', () => {
        if(dessertMenuFirstFlex.classList.contains('desserts__line--hidden')) {
            dessertMenuFirstFlex.classList.remove('desserts__line--hidden');
            dessertMenuSecondFlex.classList.add('desserts__line--hidden');
        } else {
            dessertMenuFirstFlex.classList.add('desserts__line--hidden');
            dessertMenuSecondFlex.classList.remove('desserts__line--hidden');
        }
    });

    //SLIDER
    let currentSlide = 0;
    const slides = document.querySelectorAll('.fav-coffee__slide-item');
    const totalSlides = slides.length;
    const sliderRightArrow = document.querySelector('.fav-coffee__arrow--left');
    const sliderLeftArrow = document.querySelector('.fav-coffee__arrow--right');
    const paginationLines = document.querySelectorAll('.fav-coffee__pagination-line');
    function updatePagination() {
        paginationLines.forEach((line, index) => {
        if(index === currentSlide) {
            line.classList.add('fav-coffee__pagination-line--active')
        } else {
            line.classList.remove('fav-coffee__pagination-line--active');
        }
     });
    }
    sliderRightArrow.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active-slide');
        slides[currentSlide].classList.add('hidden');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.remove('hidden');
        slides[currentSlide].classList.add('active-slide');
        updatePagination()
      });
    sliderLeftArrow.addEventListener('click', () => {
        slides[currentSlide].classList.remove('.active-slide');
        slides[currentSlide].classList.add('hidden');
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.remove('hidden');
        slides[currentSlide].classList.add('.active-slide');
        updatePagination()
      });
    updatePagination();

    //BURGER MENU 768px
    const burgerBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav__menu');

    document.addEventListener ('DOMContentLoaded', function() {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('hamburger--active');
        navMenu.classList.toggle('active');
        headerMenuBtn.classList.add('hidden');
      });


    document.querySelectorAll('.nav__link').forEach (link =>
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('hamburger--active');
            navMenu.classList.remove('active');
        }));
    });


    //MODAL WINDOWS

    const modals = document.querySelectorAll('.modal');
    const menuItems = document.querySelectorAll('.menu__item');

    menuItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            modals[index].classList.remove('modal--hidden');
            document.body.style.overflow =  'hidden';
            menu.classList.add('grayscale');
            document.querySelector('.header').classList.add('grayscale');
        })
    })

modals.forEach((modal) => {
    const modalCloseBtn = modal.querySelector('.modal__btn');
    modalCloseBtn.addEventListener('click',() => {
        modal.classList.add('modal--hidden');
        menu.classList.remove('grayscale');
        document.querySelector('.header').classList.remove('grayscale');
        document.body.style.overflow = 'visible';
    });
});


























