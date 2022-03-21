//tried cursor.
// const cursorRounded = document.querySelector('.rounded');
// const moveCursor = (e) => {
//     const mouseY = e.clientY;
//     const mouseX = e.clientX;
//     cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
// }
// window.addEventListener('mousemove', moveCursor)

window.addEventListener('scroll', function (e) {
    const paral = document.querySelector('.imgHolder');
    var scrolled = window.pageYOffset - 3500;
    var rate = -(scrolled * 0.30);

    paral.style.transform = 'translate3d(0px,' + rate + 'px,0px)';
});
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
const footHeader = document.getElementById('footContainer');

const Menu = document.querySelector('#Menu');
let text = document.querySelector('navig');
const navMenu = document.querySelector('.wrapper');
const nav = document.querySelector('.nav');
let namee = document.querySelector('#tag');
var navig = document.getElementById('navig');

var isOpen = false;
function change() {
    navig.innerHTML = "Menu";
}
function revert() {
    navig.innerHTML = "Home";
}
function toggle() {
    if (!isOpen) {
        navMenu.style.clipPath = "circle(75%)";
        isOpen = true;
        nav.style.color = "white";
        navMenu.style.visibility = "visible";
        namee.style.visibility = "visible";
        navig.innerHTML = "Close";
    }
    else {
        navMenu.style.clipPath = "circle(10px at calc(100% - 11vh) 10vh)";
        isOpen = false;

        nav.style.color = "black";
        if (window.pageYOffset != 0) {
            namee.style.visibility = "hidden";
            navMenu.style.visibility = "hidden";
        }

    }

}

window.addEventListener('scroll', () => {
    if (window.pageYOffset != 0) {
        namee.style.opacity = "0";
    }
    else {
        namee.style.opacity = "1";
    }
});
let vid = document.getElementById('varHt');
window.addEventListener('scroll', height);
function height() {
    var scroll = window.pageYOffset + 1000;
    var number = scroll * 0.08;
    if (number < 90) {
        number = 90;
        vid.style.width = number + '%';
    }
    else if (number > 90 && number < 100) {
        vid.style.width = number + '%';
    }
    else {
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
    cursor2.style.top = e.pageY + (-window.scrollY) + 'px';
})
const cursor3 = document.querySelector('.cursor3');
document.addEventListener('mousemove', (e) => {
    cursor3.style.left = e.pageX + 'px';
    cursor3.style.top = e.pageY + (-window.scrollY) + 'px';
})
const cursor4 = document.querySelector('.cursor4');
document.addEventListener('mousemove', (e) => {
    cursor4.style.left = e.pageX + 'px';
    cursor4.style.top = e.pageY + 'px';
})

const Journey = document.querySelector('.journey');
setInterval(() => {
    Journey.onmouseover = () => {
        cursor.style.visibility = 'visible';
        cursor.style.transform = "scale(2)";
    }
    Journey.onmouseout = () => {
        cursor.style.visibility = 'hidden';
        cursor.style.transform = "scale(1)";
    }
}, 1);
const wrap2 = document.querySelector('#wrap2');
setInterval(() => {
    wrap2.onmouseover = () => {
        cursor3.style.visibility = 'visible';
        cursor3.style.transform = "scale(2)";
    }
    wrap2.onmouseout = () => {
        cursor3.style.visibility = 'hidden';
        cursor3.style.transform = "scale(1)";
    }
}, 1);
const wrap1 = document.querySelector('#wrap1');
setInterval(() => {
    wrap1.onmouseover = () => {
        cursor2.style.visibility = 'visible';
        cursor2.style.transform = "scale(2)";
    }
    wrap1.onmouseout = () => {
        cursor2.style.visibility = 'hidden';
        cursor2.style.transform = "scale(1)";
    }
}, 1);
const imgCont = document.querySelector('.imgCont');
setInterval(() => {
    imgCont.onmouseover = () => {
        cursor4.style.visibility = 'visible';
        cursor4.style.transform = "scale(2)";
    }
    imgCont.onmouseout = () => {
        cursor4.style.visibility = 'hidden';
        cursor4.style.transform = "scale(1)";
    }
}, 1);

const head2 = document.querySelector('.heading2');
function disp() {
    head2.classList.add("active");
}
setTimeout(disp, 500);


// function changeSlide(){
//     console.log(this.classList);
//     carouselSlide.style.transition = "transform 0.9s ease-out";
//     if(this.classList.contains("onRight")){
//         carouselSlide.style.transition = "transform 0.9s ease-out";
//     counter++;
//     caroImages[counter].style.cursor = "default";
//     caroImages[counter-1].style.cursor = "pointer";
//     carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
//     prevBtn.style.visibility = "visible";
//         if(counter == 4){
//             nextBtn.style.visibility = "hidden";
//     }
//     }
//     else{
//         counter--;
//         caroImages[counter].style.cursor = "default";
//         caroImages[counter+1].style.cursor = "pointer";
//         carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
//         nextBtn.style.visibility = "visible";
//         if(counter < 1){
//             prevBtn.style.visibility = "hidden";
//         }
//     }
//     }


let image = Array.from(document.getElementsByClassName('caroNavi'));
let div = Array.from(document.getElementsByClassName('mapDiv'));
let embedVideo = Array.from(document.getElementsByClassName('videoOk'));
let playButton = Array.from(document.getElementsByClassName('playButton'));
let info = Array.from(document.getElementsByClassName('info'));

const slider = document.querySelector('#carousel-slide');
let index = 1;
let counter = 1;

image.forEach((element) => {

    element.addEventListener('click', (ele) => {
        
        counter = parseInt(ele.target.id);
        div[index - 1].classList.remove('special');
        div[counter - 1].classList.add('special');


        if (index < counter) {
            slider.style.transform = 'translateX(' + -74 * index + 'vw)';
            slider.style.transition = "all 1s";
            embedVideo[counter - 2].style.display = "none";
            // embedVideo[counter - 2].pause();
            image[counter - 2].style.display = "block";
            info[counter - 2].style.display = "block";
            index++;
        }
        else if (index > counter) {
            slider.style.transform = 'translateX(' + -74 * (index - 2) + 'vw)';
            slider.style.transition = "all 1s";
            embedVideo[counter].style.display = "none";
            image[counter].style.display = "block";
            info[counter].style.display = "block";
            index--;
        }
    })
    // element.addEventListener('mouseover', (ele) => {
    //     counter = parseInt(ele.target.id);
    //     cursor4.style.visibility = 'visible';
    //     cursor4.style.transform = "scale(2)";
    //     if (index < counter) {
    //         cursor4.style.transform = 'rotate(180)';
    //     }
//     })
 })

playButton.forEach((element) => {
    element.addEventListener('click', (ele) => {
        counter = parseInt(ele.target.id);
        embedVideo[counter - 1].style.display = "block";
        image[counter - 1].style.display = "none";
        info[counter - 1].style.display = "none";
    })
})
// image.forEach((element) => {

//     element.addEventListener('mouseover', (ele) => {

//         counter = parseInt(ele.target.id);
//         if (index < counter) {
//             cursor4.style.visibility= 'visible';
//             cursor4.style.transform = "scale(2)";
//         }
//         else if (index > counter) {
//             cursor4.style.visibility= 'visible';
//             cursor4.style.transform = "scale(2)";
//         }
//     })
//     element.addEventListener('mouseout', (ele) => {

//         counter = parseInt(ele.target.id);
//         if (index < counter) {
//             cursor4.style.visibility= 'hidden';
//             cursor4.style.transform = "scale(1)";
//         }
//         else if (index > counter) {
//             cursor4.style.visibility= 'hidden';
//             cursor4.style.transform = "scale(1)";
//         }
//     })
// })

div.forEach((element) => {

    element.addEventListener('click', (ele) => {

        counter = parseInt(ele.target.id);
        div[index - 1].classList.remove('special');
        div[counter - 1].classList.add('special');
        index = counter;

        slider.style.transform = 'translateX(' + -74 * (index - 1) + 'vw)';
        slider.style.transition = "all 1s";
    })
})

// var text = document.querySelectorAll('.aniText');
// const strText = text.textContent;
// console.log(strText);
// const splitText = strText.split(" ").map(span);
var offset = 0;
const menuNav = document.getElementById("menuNav");
setInterval(() => {
    offset = window.pageYOffset;
}, 5);
offset = window.pageYOffset;
setInterval(() => {
    document.addEventListener('scroll', () => {
        if (window.pageYOffset > offset) {
            Menu.style.opacity = "0";

        }
        else {
            Menu.style.opacity = "1";
        }

    }, 2)
});
