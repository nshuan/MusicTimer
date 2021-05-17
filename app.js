// JavaScript source code

'use strict'

var current = 0;
var dots = document.getElementsByClassName("transiDot");
var list = document.getElementsByClassName("musicList");

function tapPlay() {
	var btn = document.getElementById('playButton');
	var msl = document.getElementById('musicListBox');
	var tbl = document.getElementById('transi_left');
	var tbr = document.getElementById('transi_right');
	var plr = document.getElementById('player');
	var pg1 = document.getElementById('playGame1');
	btn.style.display = "none";
	msl.style.display = "block";
	plr.style.display = "block";
	pg1.style.display = "block";
	if (innerWidth >= innerHeight) {
		tbl.style.display = "block";
		tbr.style.display = "block";
	}
}

function transiPage_right() {
	current++;1
	if (current == dots.length) {
		current = 0;
	}
	list[current].style.animation = "swipeL 0.6s 0.2s 1";
	for (var i = 0; i < dots.length; i++) {
		dots[i].style.opacity = "60%";
		list[i].style.display = "none";
	}
	dots[current].style.opacity = "100%";
	list[current].style.display = "block";
}

function transiPage_left() {
	current--;
	if (current == -1) {
		current = dots.length - 1;
	}
	list[current].style.animation = "swipeR 0.6s 0.2s 1";
	for (var i = 0; i < dots.length; i++) {
		dots[i].style.opacity = "60%";
		list[i].style.display = "none";
	}
	dots[current].style.opacity = "100%";
	list[current].style.display = "block";
}

