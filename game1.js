// JavaScript source code

'use strict'

function game1() {
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var ptext = document.getElementById('playGame1_text');
	var plbrd = document.getElementById('playboard');
	var ingrd = document.getElementById('innerground');
	if (page1.style.display == "block") {
		page1.style.display = "none";
		page2.style.display = "block";
		ptext.innerHTML = "Back";
		if (innerWidth >= innerHeight) {
			plbrd.style.width = "300px";
			plbrd.style.height = "300px";
			ingrd.style.width = "240";
			ingrd.style.height = "240";
		}
	}
	else {
		if (page1.style.display == "none") {
			page2.style.display = "none";
			page1.style.display = "block";
			ptext.innerHTML = "Play Game";
		}
	}
}
