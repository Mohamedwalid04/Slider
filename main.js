let slider = document.querySelector(".slider");
let buttons = document.querySelector(".buttons")
let sliderPause = document.querySelector(".slider .fun");
let list = document.querySelector(".slider .list");
let images = document.querySelectorAll(".list .image");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;


// function for get the next image
function nextImage() {
    if (active + 1 > images.length - 1) {
        active = 0;
    } else {
        active += 1;
        dots.forEach((li) => {
            li.classList.remove("active")
        })
        dots[active].classList.add("active")
    }
}
// function for get the prev image
function prevImage() {
    if (active - 1 < 0) {
        active = images.length - 1;
    } else {
        active -= 1;
        dots.forEach((li) => {
            li.classList.remove("active")
        })
        dots[active].classList.add("active")
    }
}
// button next functionallity
next.onclick = () => {
    Pause()
    nextImage()
    moveImage()
    autoPlay()
    dots.forEach((li) => {
        li.classList.remove("active")
    })
    dots[active].classList.add("active")
}
// button prev functionallity
prev.onclick = () => {
    Pause()
    prevImage()
    moveImage()
    autoPlay()
    dots.forEach((li) => {
        li.classList.remove("active")
    })
    dots[active].classList.add("active")
}
// move the slider to show the next or prev image
function moveImage() {
    const slideWidth = images[0].clientWidth;
    list.style.transform = `translateX(${-active * slideWidth}px)`;
}

// auto slider
let autoSlide;
function autoPlay() {
    autoSlide = setInterval(() => {
        next.click()
        dots.forEach((li) => {
            li.classList.remove("active")
        })
        dots[active].classList.add("active")
    }, 3000)
}
// function for Pause autoSlider
function Pause() {
    clearInterval(autoSlide)
}
// interActive Dots 
dots.forEach((li, i) => {
    li.addEventListener("click", () => {
        dots.forEach((li) => {
            li.classList.remove("active")
        })
        Pause()
        active = i;
        const slideWidth = images[0].clientWidth;
        list.style.transform = `translateX(${-active * slideWidth}px)`;
        li.classList.add("active")
        autoPlay()
    })
})
// Pause slider on hover
sliderPause.addEventListener("mouseenter", () => {
    Pause()
})
buttons.addEventListener("mouseenter", () => {
    Pause()
})
// Resume slider on unhover
sliderPause.addEventListener("mouseleave", () => {
    autoPlay()
})
buttons.addEventListener("mouseleave", () => {
    autoPlay()
})



window.onload = () => {
    autoPlay()
}
