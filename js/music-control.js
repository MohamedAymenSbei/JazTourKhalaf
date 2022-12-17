const music = document.getElementById('music');
const playBtn = document.querySelector('.music-btn');
const btnIcon = playBtn.firstElementChild;
const playIcon ='fa-solid fa-volume-high';
const pauseIcon = 'fa-solid fa-volume-xmark'
let isPlaying=false;
music.volume='0.3';

function playMusicHandler(){
    if(isPlaying){
        music.pause();
        btnIcon.classList=pauseIcon
    }else{
        music.play();
        btnIcon.classList=playIcon;
    }
    isPlaying=!isPlaying;
}

playBtn.addEventListener('click',playMusicHandler)

