const contents=document.querySelectorAll('.content');

document.addEventListener('scroll',showText);

function showText(){

    contents.forEach((section)=>{
        const imgEl=section.querySelector('img');
        const textEl=section.querySelector('.text');

        const scrollPos=window.pageYOffset;
        // 500 + 100 / 50
        // 502 => แสดงข้อความ
        const textPos = imgEl.offsetTop + imgEl.offsetHeight / 50 ;
        if(scrollPos > textPos){
            // แสดงเนื้อหาออกมา
            textEl.classList.add('show-reveal');
        }else{
            // ปิดการแสดงเนื้อหา
            textEl.classList.remove('show-reveal');
        }
    });
}