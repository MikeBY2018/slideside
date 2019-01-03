window.onload = function(){
	checkLabel();
}
 
function checkLabel(){
	var checkbox = document.querySelectorAll('#pageall label');
	for (var i = 0; i < checkbox.length; i++) {
		checkbox[i].onclick = function(){
			if(this.previousElementSibling.checked){			
				this.previousElementSibling.checked = false;
			}else{
				this.previousElementSibling.checked = true;
			};
		}
	};
};


var about = document.getElementById('about');
var portfolio = document.getElementById('portfolio');
var portfolioCo = document.getElementById('modal-overlay');
var backgSlide = document.getElementsByClassName('background');


var clickMenu = document.querySelectorAll('.cl-effect-4 li a');
var pagination = document.querySelectorAll('.onepage-pagination a');
var mainTranslate = document.querySelector('div.main');






// document.getElementById('about').onclick = function(){
//     window.location.href = 'work/about.html';
// }
