
console.log("Welcome to spotify");
let songIndex =0;
let audioElem = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');

let songs=[
    {songName:" Muralidhar shyam", filePath:"songs/1.mp3",  },
    {songName:" Jivalaga", filePath:"songs/2.mp3",  },
    {songName:" Ghan Rani", filePath:"songs/3.mp3",  },
    {songName:" Maziya Mana", filePath:"songs/4.mp3",  },
    {songName:" Savale sundar", filePath:"songs/5.mp3",  },
    {songName:" Fulale re", filePath:"songs/6.mp3",  },
]
songItem.forEach((element, i)=>{
    //console.log(element,i);
    //element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElem.paused || audioElem.currentTime<=0){
        audioElem.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{ 
        audioElem.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElem.addEventListener('timeupdate',()=>{
    //console.log('timeUpdate');
    progress=parseInt((audioElem.currentTime/audioElem.duration)*100);
   // console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElem.currentTime = myProgressBar.value * audioElem.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        console.log(e.target.id);
        songIndex = parseInt(e.target.id);
        //audioElem.src=('songs/1.mp3');
        audioElem.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElem.currentTime=0;
        audioElem.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        })
})

document.getElementById('next').addEventListener('click' ,()=>{
    if(songIndex>5){
        songIndex=0;
    } 
    else{
        songIndex += 1;
    }
        audioElem.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElem.currentTime=0;
        audioElem.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

    document.getElementById('previous').addEventListener('click' ,(e)=>{
        console.log(e.target.id);

        if(songIndex<=0){
            songIndex=0;
        }
        else{
            songIndex -= 1;
        }

            audioElem.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElem.currentTime=0;
            audioElem.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
    })