const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const pageContainer = document.querySelector('.all-pages-container');
const allItems = document.querySelectorAll('.item');
const allDots = document.querySelectorAll('.dot')

const PAGE_WIDTH = 450;
let position = -450;
let counter = 1;
// Создание дубликатов

const cloneItemPrev = allItems[allItems.length - 1].cloneNode(true);
const cloneItemNext = allItems[0].cloneNode(true);

pageContainer.insertAdjacentElement('afterbegin',cloneItemPrev);
pageContainer.insertAdjacentElement('beforeend',cloneItemNext);

// Методы на следующий и пердыдущий
const prevSlide = () => {
    disable();
    setTimeout(enable, 800);

    if (counter <= 1) {
        counter = allItems.length + 1;
    }

    position += PAGE_WIDTH;
    pageContainer.style.transition = 'all 0.7s ease-in-out';
    pageContainer.style.transform = `translateX(${position}px)`;


    counter--;
    dotActiveSlide(counter)
    jump();
}


const nextSlide = () => {
    disable();
    setTimeout(enable, 800);

    position -= PAGE_WIDTH;
    pageContainer.style.transition = 'all 0.7s ease-in-out';
    pageContainer.style.transform = `translateX(${position}px)`;
    console.log(position)

    if (counter >= 10) {
        counter = 0;
    }
    counter++;
    dotActiveSlide(counter);
    jump();

}

// Метод на скачек

const jump = () => {
    pageContainer.addEventListener('transitionend', () => {

        if (position < -(allItems.length) * PAGE_WIDTH && position != 0) {
            pageContainer.style.transition = 'none';
            position = -450;
            pageContainer.style.transform = `translateX(${position}px)`;
        } else if (position >= 0) {
            pageContainer.style.transition = 'none';
            position = -(allItems.length) * PAGE_WIDTH;
            pageContainer.style.transform = `translateX(${position}px)`;
        }
    })
}

const dotActiveSlide = (n) => {
    for (let dot of allDots) {
        dot.classList.remove('active');
    }
    allDots[n - 1].classList.add('active');
}

const dotActiveSlideClick = (i) => {
    dotActiveSlide(i)
    counter = i

    switch (i) {
        case 1:position = -((allItems.length - 9) * PAGE_WIDTH)
            break;
        case 2:position = -((allItems.length - 8) * PAGE_WIDTH)
            break;
        case 3:position = -((allItems.length - 7) * PAGE_WIDTH)
            break;
        case 4:position = -((allItems.length - 6) * PAGE_WIDTH)
            break;
        case 5:position = -((allItems.length - 5) * PAGE_WIDTH)
            break;
        case 6:position = -((allItems.length - 4) * PAGE_WIDTH)
            break;
        case 7:position = -((allItems.length - 3) * PAGE_WIDTH)
            break;
        case 8:position = -((allItems.length - 2) * PAGE_WIDTH)
            break;
        case 9:position = -((allItems.length - 1) * PAGE_WIDTH)
            break;
        case 10:position = -((allItems.length) * PAGE_WIDTH)
            break;
    }
    pageContainer.style.transition = 'all 0.7s ease-in-out';
    pageContainer.style.transform = `translateX(${position}px)`;
}

// Методы стоп старт

const disable = () => {
    document.getElementById('next').disabled = true;
    document.getElementById('prev').disabled = true;
}
const enable = () => {
    document.getElementById('next').disabled = false;
    document.getElementById('prev').disabled = false;
}

// Ивенты на клики

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

