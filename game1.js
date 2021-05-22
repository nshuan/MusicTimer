// JavaScript source code

'use strict'

var stg1 = false;

function game1() {
	var songsource = document.getElementById('song');
	console.log(songsource.src);
	if (songsource.src == "") alert('Choose a song!');
	else {
		var page1 = document.getElementById('page1');
		var page2 = document.getElementById('page2');
		var ptext = document.getElementById('playGame1_text');
		var plbrd = document.getElementById('playboard');
		var Tiles = document.getElementsByClassName('tile');
		var bTile = document.getElementsByClassName('btile');
		var cover = document.getElementById('cover');
		var congr = document.getElementsByClassName('countdown_number');
		if (page1.style.display == "block") {
			page1.style.display = "none";
			page2.style.display = "block";
			ptext.innerHTML = "Start";
			cover.remove();
			congr[1].remove();
			for (var i = 0; i < 16; i++) {
				Tiles[i].style.backgroundColor = "white";
				bTile[i].style.backgroundColor = "white";
			}
			stg1 = false;
		}
		else {
			if (ptext.innerHTML == "Play again") {
				ptext.innerHTML = "Start";
				cover.remove();
				congr[1].remove();
				for (var i = 0; i < 16; i++) {
					Tiles[i].style.backgroundColor = "white";
					bTile[i].style.backgroundColor = "white";
				}
				stg1 = false;
			}
			else {
				console.log(stg1);
				if (stg1 == false && ptext.innerHTML == "Start") {stg1 = true;startGame();}
				else {if (stg1 == true) alert('Finish your current game!');}
			}
		}
	}
}

function back() {
	var ptext = document.getElementById('playGame1_text');
	page2.style.display = "none";
	page1.style.display = "block";
	ptext.innerHTML = "Play Game";
}

var tilsa = [];
var choice = document.getElementsByClassName('btile');
var p_ans = [];

function startGame() {
	var grd = document.getElementsByClassName('ground');
	var countnum = document.getElementById('countdown_number');
	if (grd[1].style.display == "none") grd[1].style.display = "block";
	tilsa = [];
	p_ans = [];
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
	for (var i = 0; i < 8; i++) {
		var sub = Math.floor(Math.random()*15);
		while (tiles[sub].style.backgroundColor == "blue") {sub = Math.floor(Math.random()*15);}
		tiles[sub].style.backgroundColor = "blue";
		tilsa.push(sub);
	}
	setTimeout(function(){grd[1].style.display = "none";}, 2500);
}

function checkchoice(no) {
	var plb = document.getElementById('playboard');
	if (choice[no].style.backgroundColor != "blue") p_ans.push(no);
	choice[no].style.backgroundColor = "blue";
	if (p_ans.length == 8) {
		var cover = document.createElement('div');
		cover.className = "ground";
		if (innerWidth <= innerHeight) {
			cover.style.width = "80vw";
			cover.style.height = "80vw";
		}
		cover.id = "cover";
		plb.appendChild(cover);
		checkans();
	}
	console.log(tilsa);
	console.log(p_ans.length);
	console.log(p_ans);
}

function checkans() {
	var plb = document.getElementById('playboard');
	var cover = document.getElementById('cover');
	var congr = document.createElement('p');
	var tiles = document.getElementsByClassName('tile')
	var ptext = document.getElementById('playGame1_text');
	congr.className = "countdown_number";
	tilsa.sort();
	p_ans.sort();
	console.log(tilsa);
	console.log(p_ans);
	if (compare_arrays(tilsa, p_ans) == true) {
		cover.style.backgroundColor = "black";
		cover.style.opacity = 0.4;
		congr.innerHTML = "Correct!";
		congr.style.color = "green";
		congr.style.fontSize = "80px";
		congr.style.opacity = "0.8";
		plb.appendChild(congr);
	}
	else {
		cover.style.backgroundColor = "black";
		cover.style.opacity = 0.4;
		congr.innerHTML = "Incorrect!";
		congr.style.color = "red";
		congr.style.fontSize = "80px";
		congr.style.opacity = "0.8";
		plb.appendChild(congr);
	}
	ptext.innerHTML = "Play again";
}

function compare_arrays(m, n) {
	if (m.length != n.length) return false;
	else {
		for (var i = 0; i < m.length; i++) {
			if (m[i] != n[i]) return false;
		}
		return true;
	}
}