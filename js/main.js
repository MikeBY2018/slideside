window.onload = function(){

		
	var portfolio = document.getElementById('portfolio');
	var portfolioCo = document.getElementById('modal-overlay');
	var backgSlide = document.getElementsByClassName('background');
	var bodyClass = doc

	var navMenu = document.querySelectorAll('.cl-effect-4 li a');

	for(var i = 0; i < navMenu.length; i+=2){
		navMenu[i].onclick = thisPage;
	}
}

function thisPage() {
	this.classList.add('this_page');
}