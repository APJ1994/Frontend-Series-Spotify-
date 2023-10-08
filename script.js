
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let audioPlay=document.getElementById('songPlay');
let myProgressBar=document.getElementById('myProgressbar');
let gif=document.getElementById('gif')
let songsItem=Array.from(document.getElementsByClassName('songItem'))
let masterSongName=document.getElementById('masterSong');
// audioElement.play();

let songs=[
    {songName:"Let Me Love You",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Heeriye",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Chaleya - Jawaan",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Har Har",filePath:"songs/4.mp3",coverPath:"covers/5.jpg"},
    {songName:"Ram Siya Ram",filePath:"songs/5.mp3",coverPath:"covers/4.jpg"}
]

// Song name,image Get

songsItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
// Handle Play and Pause for Events

audioPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioPlay.classList.remove("fa-play");
        audioPlay.classList.add("fa-pause");
        gif.style.opacity=1;
        }
        else{
        audioElement.pause();
        audioPlay.classList.remove("fa-pause");
        audioPlay.classList.add("fa-play");
        gif.style.opacity=0;
        }
})



// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
});

// Progressbar Handle 
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;


})

// Change Songs Handle

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        audioPlay.classList.remove("fa-play");
        audioPlay.classList.add("fa-pause");


    })
})

// Next Forward Songs

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play();
    audioPlay.classList.remove("fa-play");
    audioPlay.classList.add("fa-pause");

})

// Previous Forward Songs

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0;
    audioElement.play();
    audioPlay.classList.remove("fa-play");
    audioPlay.classList.add("fa-pause");

})