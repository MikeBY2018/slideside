window.onload = function(){

		
	var portfolio = document.getElementById('portfolio');
	var portfolioCo = document.getElementById('modal-overlay');
	var backgSlide = document.getElementsByClassName('background');

	var navMenu = document.querySelectorAll('.cl-effect-4 li a');
	// Отображение пунктов меню

	/*/navMenu[0].onclick = function(){		
		navMenu[2].classList.remove('this_page');
		this.classList.add('this_page');
		
		if(this.getAttribute('href') == '#page_03'){
			backgSlide[0].classList.add('down-scroll');
			backgSlide[1].classList.add('down-scroll');
			backgSlide[2].classList.add('up-scroll');
			backgSlide[2].classList.remove('down-scroll');
			backgSlide[1].classList.remove('up-scroll');
			backgSlide[0].classList.remove('up-scroll');

			removing();
			thisPage[2].setAttribute('data-number-pages', '0' + 3 +'/04');
		}
	}

	navMenu[2].onclick = function(){	
		navMenu[0].classList.remove('this_page');	
		this.classList.add('this_page');
		if(this.getAttribute('href') == '#page_04'){
			backgSlide[0].classList.add('down-scroll');
			backgSlide[1].classList.add('down-scroll');
			backgSlide[2].classList.add('down-scroll');
			backgSlide[2].classList.remove('up-scroll');
			backgSlide[1].classList.remove('up-scroll');
			backgSlide[0].classList.remove('up-scroll');

			removing();
			thisPage[3].setAttribute('data-number-pages', '0' + 4 +'/04');
		}
	}*/
	

	// var thisPage = document.querySelectorAll('.pages a');
	

	
	// for(i = 0; i < backgSlide.length; i++){
	// 	backgSlide[i].onwheel = function(){
	// 		for(i = 0; i < navMenu.length; i++){
	// 			navMenu[i].classList.remove('this_page');	
	// 		}
			
	// 		if(event.deltaY > 0){
	// 			if(this.getAttribute('id') == 'index'){
	// 				removing();
	// 				thisPage[1].setAttribute('data-number-pages', '0' + 2 +'/04');						
	// 			}else if(this.getAttribute('id') == 'page_02'){
	// 				removing();
	// 				thisPage[2].setAttribute('data-number-pages', '0' + 3 +'/04');							
	// 			}else if(this.getAttribute('id') == 'page_03'){
	// 				removing();
	// 				thisPage[3].setAttribute('data-number-pages', '0' + 4 +'/04');				
	// 			}else if(this.getAttribute('id') == 'page_04'){
	// 				removing();
	// 				thisPage[3].setAttribute('data-number-pages', '0' + 4 +'/04');				
	// 			}
	// 		}

	// 		if(event.deltaY < 0){
	// 			if(this.getAttribute('id') == 'page_04'){
					
	// 				removing();
	// 				thisPage[2].setAttribute('data-number-pages', '0' + 3 +'/04');				
	// 			}else if(this.getAttribute('id') == 'page_03'){
					
	// 				removing();
	// 				thisPage[1].setAttribute('data-number-pages', '0' + 2 +'/04');		
	// 			}else if(this.getAttribute('id') == 'page_02'){
	// 				removing();
	// 				thisPage[0].setAttribute('data-number-pages', '0' + 1 +'/04');
	// 			}else if(this.getAttribute('id') == 'index'){
	// 				removing();
	// 				thisPage[0].setAttribute('data-number-pages', '0' + 1 +'/04');
	// 			}
	//	}


	// 		function removScroll(){
	// 			for(i = 0; i < thisPage.length; i++){
	// 				backgSlide[i].remove('up-scroll');
	// 				backgSlide[i].remove('down-scroll');
	// 			}
	// 		}
	// 	}
	// }

	// function removing(){
	// 	for(i = 0; i < thisPage.length; i++){
	// 		thisPage[i].removeAttribute('data-number-pages'); 						
	// 	}
	// }
}