const categories = document.querySelectorAll('.category');

window.addEventListener('scroll',showCategory)


function showCategory(){
    const calculateHeight = window.innerHeight-20;

    categories.forEach(category=>{
        const topPosition = category.getBoundingClientRect().top;
        if(topPosition<calculateHeight){
            category.classList.add('active');
        }else{
            category.classList.remove('active');
        }
    });
}