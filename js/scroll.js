$(document).ready(function(){
	
	$(".main").onepage_scroll({
	   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
	   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	   beforeMove: function(index) {animateStars();},  // This option accepts a callback function. The function will be called before the page moves.
	   afterMove: function(index){}, 		// This option accepts a callback function. The function will be called after the page moves.
	   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	   keyboard: true,                  // You can activate the keyboard controls
	   responsiveFallback: 550,        // You can fallback to normal page scroll by defining the width of the browser in which
	                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                    // the browser's width is less than 600, the fallback will kick in.
	   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});

});	

function animateStars(){
		var classNameBody = document.body.className;
		var pageClass = $(".cl-effect-4 li a");
		

		var starCanvasHeight;

		if(classNameBody == 'viewing-page-1'){
			starCanvasHeight = 0;
			remThisPageClass();
		}else if(classNameBody == 'viewing-page-2'){
			starCanvasHeight = 100;
			remThisPageClass();
			pageClass[0].classList.add('this_page');
			
		}else if(classNameBody == 'viewing-page-3'){
			starCanvasHeight = 200;
			remThisPageClass();
		}else if(classNameBody == 'viewing-page-4'){
			starCanvasHeight = 300;
			remThisPageClass();
			pageClass[2].classList.add('this_page');
		}
		canvas1.css({ 
			'transform': 'translate(0 ,' + starCanvasHeight + '%)',
			'-webkit-transform': 'translate(0, ' + starCanvasHeight + '%)',
			'-ms-transform': 'translate(0, ' + starCanvasHeight + '%)',
	    }); 

	function remThisPageClass(){
		for(i = 0; i < 3; i++){
			pageClass[i].classList.remove('this_page');
		}
	}   
}


