let burgerBtn = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');

const anchors = document.querySelectorAll('a[href*="#"]');



// Burger
burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})

// Anchor
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// Fixed header

const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const headerH = header.offsetHeight; 
const introH = intro.offsetHeight; 

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    
    if (scrollDistance >= introH + headerH) {
        header.classList.add('header-fixed');
        intro.style.marginTop = `${headerH}px`;
    } else {
        header.classList.remove('header-fixed');
        intro.style.marginTop = null;
    }
});



AOS.init({
    once: true
});
