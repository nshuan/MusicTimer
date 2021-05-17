// JavaScript source code

'use strict'

var songs = document.getElementsByClassName("songinlist");
var subn = 0;

function playSong(n) {
    st = false;
    var pausin = document.getElementById('pausing');
    var playin = document.getElementById('playing');
    if (subn != 0) {songs[subn-1].style.opacity = 0.8;} 
	songs[n-1].style.opacity = 1.0;
    var song = document.getElementById("song");
	switch (n){
        case 1: song.setAttribute("src", "./Resources/Musics/COOLIN_DUB'L U.mp3");break;
        case 2: song.setAttribute("src", "./Resources/Musics/RoddyRicch_TheBox.mp3");break;
        case 3: song.setAttribute("src", "./Resources/Musics/Stephanie Poetri - I Love You 3000.mp3");break;
    }
    if (subn != n) {document.getElementsByTagName('audio')[0].load();document.getElementsByTagName('audio')[0].play();pausin.style.display = "none";playin.style.display = "block";}
    subn = n;
}

function player() {
    var music = document.getElementsByTagName('audio')[0];
    var fulltime = Math.floor(music.duration);
    var fullshow = document.getElementById('fullTime');
    fullshow.innerHTML = Math.floor(fulltime/60) + ':' + (fulltime - Math.floor(fulltime/60)*60);
}

function checkCurrent() {
    var music = document.getElementsByTagName('audio')[0];
    var currtime = Math.floor(music.currentTime);
    var currshow = document.getElementById('currTime');
    var minute = Math.floor(currtime/60);
    var second = currtime - Math.floor(currtime/60)*60;
    if (second < 10) {second = '0' + second;}
    currshow.innerHTML = minute + ':' + second;
}

function currentLine() {
    var music = document.getElementsByTagName('audio')[0];
    var currtime = music.currentTime;
    var fulltime = music.duration;
    var currline = document.getElementById('currLine');
    currline.style.width = currtime/fulltime*60 + 'vw';
}

setInterval(checkCurrent, 1000);
setInterval(currentLine, 50);

function pause() {
    //console.log(st);
    var pausin = document.getElementById('pausing');
    var playin = document.getElementById('playing');
    var music = document.getElementsByTagName('audio')[0];
    if (st == true) {
        playin.style.display = "none";
        pausin.style.display = "block";
    }
    else {
        if (music.paused) {
            music.play();
            pausin.style.display = "none";
            playin.style.display = "block";
        }
        else {
            music.pause();
            playin.style.display = "none";
            pausin.style.display = "block";
        }
    }
}