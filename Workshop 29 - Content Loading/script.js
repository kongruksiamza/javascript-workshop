const header = document.getElementById('header');
const title =document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile_img');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animated_bg = document.querySelectorAll('.animated_bg');
const animated_text = document.querySelectorAll('.animated_text');

setTimeout(showContent,2000);

function showContent(){
    header.innerHTML=`
        <img src="https://cdn.pixabay.com/photo/2013/09/26/11/59/leather-sofa-186636__340.jpg" alt="">
    `;
    title.innerHTML=`โซฟา`;
    description.innerHTML=
    `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus atque similique architecto id autem. 
    `;
    profile_img.innerHTML=`<img src="https://randomuser.me/api/portraits/women/75.jpg" alt="">`;
    seller_name.innerHTML=`พิมลดา`;
    price.innerHTML=`ราคา 20,000 บาท`;
    animated_bg.forEach(el=>el.classList.remove('animated_bg'));
    animated_text.forEach(el=>el.classList.remove('animated_text'));
}