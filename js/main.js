window.onload = function(){


	

	var navMenu = document.querySelectorAll('.cl-effect-4 li a');
	var backgSlide = document.getElementsByClassName('background');
	
	var thisPage = document.querySelectorAll('.pages a');/*неактуально*/
	console.log(backgSlide);

	// Отображение пунктов меню
	/*for(var i = 0; i < navMenu.length; i++){
		navMenu[i].onclick = function(){		
			if(this.hasAttribute('id')){
				portfolioCo.style.display = 'block';
			}

		}
	}*/


	//if(portfolioCo.onclick)



	function page(){
		var p;
		for(var i = 0; i < thisPage.length; i++){
			if(thisPage[i].hasAttribute('data-number-pages'))
				p = thisPage[i].getAttribute('data-number-pages');
		}
		return p;
	}
		
	//----------------------------------------
}
		


