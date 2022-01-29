//tried cursor.
// const cursorRounded = document.querySelector('.rounded');
// const moveCursor = (e) => {
//     const mouseY = e.clientY;
//     const mouseX = e.clientX;
//     cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
// }
// window.addEventListener('mousemove', moveCursor)



//parallax
window.addEventListener('scroll', function (e) {
    const paral = document.querySelector('.imgHolder');
    var scrolled = window.pageYOffset - 3200;
    var rate = -(scrolled * 0.25);
    console.log(window.pageYOffset);

    paral.style.transform = 'translate3d(0px,' + rate + 'px,0px)';
});
//revealing texts
window.addEventListener('scroll', reveal);
function reveal() {

    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 60;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}
const Menu = document.querySelector('.Menu');
let text = document.querySelector('navig');
const navMenu = document.querySelector('.wrapper');
const nav = document.querySelector('.nav');
var isOpen = false;
function toggle(){
    if(!isOpen){
        navMenu.style.clipPath = "circle(75%)";
        isOpen = true;
        nav.style.color = "white";
    }
    else{
        navMenu.style.clipPath = "circle(10px at calc(100% - 11vh) 11vh)";
        isOpen=false;
        nav.style.color = "black";
    }

}
// function change(){
//     text.innerHTML("Menu");
// }