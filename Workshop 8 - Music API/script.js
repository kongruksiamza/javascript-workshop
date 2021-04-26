const music_container = document.getElementById('music-container');
const playBtn=document.getElementById('play');
const prevBtn=document.getElementById('prev');
const nextBtn=document.getElementById('next');
const audio=document.getElementById('audio');
const progress=document.getElementById('progress');
const progress_container=document.getElementById('progress-container');
const title=document.getElementById('title');
const cover=document.getElementById('cover');


const songs=["Contra","HavestMoon","Mario"];
let index=2;

function loadSongs(song){
    title.innerText=`เพลง ${song} .mp3`;
    cover.src=`cover/${song}.jpg`;
    audio.src=`music/${song}.mp3`;
}

loadSongs(songs[index])

playBtn.addEventListener('click',()=>{
    const isPlay=music_container.classList.contains('play');// เช็คว่าเล่นเพลงหรือไม่ 

    if(isPlay){
        pauseSong(); // หยุดเล่น
    }else{
        playSong(); // เล่นเพลง
    }
});
prevBtn.addEventListener('click',()=>{
    index--;
    if(index<0){
        index=songs.length-1;
    }
    loadSongs(songs[index]);
    playSong();
});
nextBtn.addEventListener('click',nextSong);

function nextSong(){
    index++;
    if(index>songs.length-1){
        index=0;
    }
    loadSongs(songs[index]);
    playSong();
}

function playSong(){
    music_container.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    music_container.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

audio.addEventListener('timeupdate',updateProgress);

function updateProgress(e){
    const {duration,currentTime} = e.srcElement;
    const progressPercent=(currentTime/duration)*100;
    progress.style.width=`${progressPercent}%`;
}

progress_container.addEventListener('click',setProcess);

function setProcess(e){
    const width=this.clientWidth;
    const clickX=e.offsetX;
    const duration=audio.duration;
    audio.currentTime=(clickX/width)*duration;
}
audio.addEventListener('ended',nextSong);