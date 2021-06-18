const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button'),
      sidebar = document.querySelector('.sidebar'),
      container = document.querySelector('.container'),
      height = container.clientHeight,
      mainSlide = document.querySelector('.main-slide'),
      slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;
 
const changeSlide = (direction) => {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
};

sidebar.style.top = `-${(slidesCount - 1)*100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up')
});

downBtn.addEventListener('click', () => {
    changeSlide('down')
});

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
});

container.addEventListener('wheel', event => {
    if (event.deltaY > 0) {
        changeSlide('up')
    } else if (event.deltaY < 0) {
        changeSlide('down')
    }
});




