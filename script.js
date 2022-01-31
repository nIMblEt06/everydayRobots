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
    var scrolled = window.pageYOffset - 3500;
    var rate = -(scrolled * 0.30);
    // console.log(window.pageYOffset);

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

const Menu = document.querySelector('#Menu');
let text = document.querySelector('navig');
const navMenu = document.querySelector('.wrapper');
const nav = document.querySelector('.nav');
let namee = document.querySelector('#tag');
var navig = document.getElementById('navig');
var isOpen = false;
function change(){
    navig.innerHTML = "Menu";
}
function revert(){
    navig.innerHTML = "Home";
}
function toggle(){
    if(!isOpen){
        navMenu.style.clipPath = "circle(75%)";
        isOpen = true;
        nav.style.color = "white";
        navMenu.style.visibility = "visible";
        namee.style.visibility = "visible";
        navig.innerHTML = "Close";
    }
    else{
        navMenu.style.clipPath = "circle(10px at calc(100% - 11vh) 10vh)";
        isOpen=false;
        nav.style.color = "black";
        if(window.pageYOffset!=0){
            namee.style.visibility = "hidden";
        }
        
    }

}

window.addEventListener('scroll',()=>{
    if(window.pageYOffset!=0){
        namee.style.visibility = "hidden";
    }
    else{
        namee.style.visibility = "visible";
    }
});
let vid = document.getElementById('varHt');
window.addEventListener('scroll',height);
function height(){
    // vid.style.width = '100%';        
        var scroll = window.pageYOffset + 1000;
        var number = scroll*0.08;
        if(number < 90){
            number = 90;
            vid.style.width = number + '%';
        }
        else if(number > 90 && number < 100){
            vid.style.width =  number + '%';
        }
        else{
            vid.style.width = '100%';
        }
     }

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})
const cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', (e) => {
    cursor2.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
})
const cursor3 = document.querySelector('.cursor3');
document.addEventListener('mousemove', (e) => {
    cursor3.style.left = e.pageX + 'px';
    cursor3.style.top = e.pageY + 'px';
})


var scrollIndex = 0;
document.addEventListener('scroll', (e) =>{
    if(scrollIndex < e.pageYOffset){
        scrollIndex = e.pageYOffset;
        Menu.style.display = "none";
    }
    else{
        Menu.style.visibility = "visible";
        scrollIndex = e.pageYOffset;
    }
    console.log(scrollIndex);
})
const head2 = document.querySelector('.heading2');
function disp(){
    head2.classList.add("active");
}
setTimeout(disp, 500);