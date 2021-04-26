const textEl=document.getElementById('text');
const speedEl=document.getElementById('speed');

const text = "ยินดีต้อนรับเข้าสู่หน้าแรกของเว็บไซต์";
let speed = 300/speedEl.value;

let characterId=1;

writeText();

function writeText(){
    textEl.innerText=text.slice(0,characterId);
    characterId++;
    if(characterId>text.length){
        characterId=1;
    }
    setTimeout(writeText,speed);
}

speedEl.addEventListener('input',(e)=>{
        speed=300/e.target.value;
});