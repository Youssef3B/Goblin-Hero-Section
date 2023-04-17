const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");


menu.onclick = function(){
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const src = scrollreval({
    distance: "65px",
    duration : 2600,
    delay: 450,
    reset: true
});

src.reveal('.hero-text',{delay:200, origin: 'top'});