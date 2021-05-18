// JavaScript source code

'use strict'

function game1() {
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var ptext = document.getElementById('playGame1_text');
	var plbrd = document.getElementById('playboard');
	var ingrd = document.getElementById('bottomground');
	if (page1.style.display == "block") {
		page1.style.display = "none";
		page2.style.display = "block";
		ptext.innerHTML = "Start";
		if (innerWidth <= innerHeight) {
			plbrd.style.width = "80vw";
			plbrd.style.height = "80vw";
			ingrd.style.width = "calc(80vw - 40px)";
			ingrd.style.height = "calc(80vw - 40px)";
		}
	}
	else {
		startGame();
	}
}

function back() {
	var ptext = document.getElementById('playGame1_text');
	page2.style.display = "none";
	page1.style.display = "block";
	ptext.innerHTML = "Play Game";
}

var a = 3;

function startGame() {
	var grd = document.getElementsByClassName('ground');
	var countnum = document.getElementById('countdown_number');
	for (var i = 0; i < grd.length; i++) {
		grd[i].style.display = "none";
	}
	countnum.innerHTML = "Start!";
	var x = setTimeout(function(){for (var i = 0; i < grd.length; i++) grd[i].style.display = "block";countnum.innerHTML = "";}, 1500);
	gamePlay();
}

function gamePlay() {
	var tiles = document.getElementsByClassName('tile');
	var grd = document.getElementsByClassName('ground');
	var tilsa = [];
	for (var i = 0; i < 8; i++) {
		var sub = Math.floor(Math.random()*15);
		while (tiles[sub].style.backgroundColor == "blue") {sub = Math.floor(Math.random()*15);}
		tiles[sub].style.backgroundColor = "blue";
		tilsa.push(sub);
	}
	setTimeout(function(){for (var j = 0; j < tilsa.length; j++) tiles[tilsa[j]].style.backgroundColor = "white";}, 2500);
	console.log(tilsa);
}