// JavaScript source code

'use strict'

function game1() {
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var ptext = document.getElementById('playGame1_text');
	if (page1.style.display == "block") {
		page1.style.display = "none";
		page2.style.display = "block";
		ptext.innerHTML = "Back";
	}
	else {
		if (page1.style.display == "none") {
			page2.style.display = "none";
			page1.style.display = "block";
			ptext.innerHTML = "Play Game";
		}
	}
}