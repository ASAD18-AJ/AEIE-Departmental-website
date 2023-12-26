let items = document.querySelectorAll('.about-container .image-slider .slide');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

console.log(items)
console.log(next)
console.log(prev)

// config param
let countItem = items.length;
console.log(countItem)
let itemActive = 0;
// event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 1000)
function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.about-container .image-slider .slide.active');
    // console.log(itemActiveOld)
    itemActiveOld.classList.remove('active');


    // active new item
    items[itemActive].classList.add('active');


    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}










































// const slides = document.querySelectorAll(".about-container .image-slider .slide")
// var counter = 0;
// console.log(slides)
// slides.forEach((slide, index) => { slide.style.left = `${index * 150}%` })

// const goPrev = () => {
//     counter--
//     slidesImage()
// }
// const goNext = () => {
//     counter++
//     slidesImage()
// }



// const slidesImage = () => {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform = `translateX(-${counter * 430}%)`
//         }
//     )
// }