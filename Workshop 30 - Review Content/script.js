const userdata = [
    {
        name:"พิมลี่พลอย",
        job:"พนักงานประจำ",
        text:"อากาศดี อาหารอร่อย ห้องพักสะอาดมาก",
        image:"https://randomuser.me/api/portraits/women/60.jpg"
    },
    {
        name:"ก้อง รักสยาม",
        job:"โปรแกรมเมอร์",
        text:"อากาศดีมากครับ อาหารสะอาดอร่อย เจ้าของร้านใจดีมาก จะมาอุดหนุนใหม่นะครับ",
        image:"https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        name:"พี่ตูนคนหล่อ",
        job:"รับราชการ",
        text:"อาหารสะอาดอร่อย วิวที่ร้านสวยมาก เจ้าของร้านใจดีและอากาศดีมากครับ ",
        image:"https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        name:"พี่โจโจ้",
        job:"นักเขียน",
        text:"อาหารอร่อย วิวสวย แต่ที่จอดรถน้อยไปหน่อย!",
        image:"https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
        name:"น้องตั๊กแตน",
        job:"พนักงานโรงแรม",
        text:"ราคาเป็นกันเอง อาหารโคตรอร่อย เจ้าของร้านและพนักงานน่ารัก",
        image:"https://randomuser.me/api/portraits/women/33.jpg"
    }
];

const review = document.querySelector('.review');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.user-name');
const userJob=document.querySelector('.user-job');

let activeIndex = 1;

function showReview(){
    const {name,job,text,image} = userdata[activeIndex];
    review.innerHTML=text;
    userImage.src=image;
    userName.innerHTML=name;
    userJob.innerHTML=job;
    activeIndex++;

    if(activeIndex>userdata.length-1){
        activeIndex=0;
    }
}

setInterval(showReview,10000);