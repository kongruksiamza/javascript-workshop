const items = document.querySelectorAll('.item');

items.forEach((item)=>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
    })
});

function removeActive(){
    items.forEach((item)=>{
        item.classList.remove('active');
    });
}