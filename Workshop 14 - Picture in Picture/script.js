const videoEl=document.getElementById('video');
const btnRequest=document.getElementById('requestbtn');
const btnShare=document.getElementById('sharebtn');


btnRequest.addEventListener('click',()=>{
    selectMediaStream();
});

btnShare.addEventListener('click',async ()=>{
    btnShare.disabled=true;
    await videoEl.requestPictureInPicture();
    btnShare.disabled=false;
});

// ส่งคำขอเข้าถึงอุปกรณ์
async function selectMediaStream(){
    try {
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject=mediaStream;
        videoEl.onloadedmetadata=()=>{
            videoEl.play();
        }
    } catch (error) {
        console.log(error);
    }
}