const slideContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-content');
const slideLeft = document.querySelector('.left-content');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');


//จำนวนภาพ Slide
const slideLength = slideRight.querySelectorAll('div').length;

let activeIndex = 0;

upButton.addEventListener('click',()=>changeImage("up"));
downButton.addEventListener('click',()=>changeImage("down"));

// 0 - 3
function changeImage(direction){
    const slideHeight = slideContainer.clientHeight;
    if(direction=="up"){
        activeIndex++;
        if(activeIndex>slideLength-1){
            activeIndex=0;
        }
    }else if(direction=="down"){
        activeIndex--;
        if(activeIndex<0){
            activeIndex=slideLength-1;
        }
    }
    slideLeft.style.transform = `translateY(-${activeIndex*slideHeight}px)`;
    slideRight.style.transform = `translateY(-${activeIndex*slideHeight}px)`;
}