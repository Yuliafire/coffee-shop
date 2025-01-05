// BURGER

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".header").classList.remove("open");

    document.getElementById("burger").addEventListener('click', () => {
        window.scrollTo({
            top:0,
        })
        document.querySelector(".header").classList.toggle("open");
        document.body.classList.toggle("menu-open");
    })

    // next step - foreach each menu__link and add event listener  -  click

})

// steps to imlement a burger

// 1 check if the header has class list open or not  and remove it

// 2. add event ;istene click for the burger button

//3 because the menu is positioned -4 rem from the top down
// so when we click on the burger btn firt we need to sroll the page up to the top 

//4. toggle class open for the header

//5. toggle class menu-open for the body  -  so the scroll of the page will be prevented 

//6.  for each each menu__link, get href attribute,
// remove class open from the header,
// remove menu-open from the body to let the scroll going
// 
