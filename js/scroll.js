$('document').ready(function() {

	//*подгрузка Portfolio и нажатие на пункт меню. модальное окно
	$('.about').load('../work/about.html');
  	$('.content_portfolio').load('../work/template/portfolio.html');
  	$('#teachers').load('../work/template/teachers.html');
  	$('#photogallery').load('../work/template/photogallery.html');
  	$('#payment').load('../work/template/payment.html');
  	$('#other').load('../work/template/other.html');
  	$('#welcomepage').load('../work/template/form.html');

	$(function(){
	  	var elements = $('.modal-overlay, .modal');
		$('#portfolio').click(function(){
		    elements.addClass('active');
		    $('#portfolio').addClass('this_page');

		});

		$('.close-modal').click(function(){
		    elements.removeClass('active');
		    $('#portfolio').removeClass('this_page');
		});
	});


	/*$(function(){
		var elements_1 = $('.modal-overlay, .modal');
	  $('#about').click(function(){
		  elements_1.addClass('active');
		  $('#about').addClass('this_page');

	  });

	  $('.close-modal').click(function(){
		  elements_1.removeClass('active');
		  $('#about').removeClass('this_page');
	  });
  });*/


  // гамбургер меню
	$(function(){
	  	var $mt = $('.hamburger3');
	  	var $menu = $('nav ul');

	  	$(window).resize(function(){
	  		if($menu.css('display') == 'none' && window.innerWidth > 420){
	  			$menu.show();
	  		}
	  	});
	  	$mt.click(function(){
	  		$menu.slideToggle(500);
	  	});
	});

  /*--------------*/

});

//scroll
$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "linear",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 600,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {/*animateStars();*/},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index){}, 		// This option accepts a callback function. The function will be called after the page moves.
   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: 550,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

// function animateStars(){
// 		var classNameBody = document.body.className;
// 		var pageClass = $(".cl-effect-4 li a");
// 		canvas = $('#space');


// 		var starCanvasHeight;

// 		if(classNameBody == 'viewing-page-1'){
// 			starCanvasHeight = 0;
// 			remThisPageClass();
// 		}else if(classNameBody == 'viewing-page-2'){
// 			starCanvasHeight = 100;
// 			remThisPageClass();
// 			pageClass[0].classList.add('this_page');
			
// 		}else if(classNameBody == 'viewing-page-3'){
// 			starCanvasHeight = 200;
// 			remThisPageClass();
// 		}else if(classNameBody == 'viewing-page-4'){
// 			starCanvasHeight = 300;
// 			remThisPageClass();
// 			pageClass[2].classList.add('this_page');
// 		}else if(classNameBody == 'viewing-page-5'){
// 			starCanvasHeight = 400;
// 			remThisPageClass();
// 		}
// 		canvas.css({ 
// 			'transform': 'translate(0 ,' + starCanvasHeight + '%)',
// 			'-webkit-transform': 'translate(0, ' + starCanvasHeight + '%)',
// 			'-ms-transform': 'translate(0, ' + starCanvasHeight + '%)',
// 	    }); 

// 		function remThisPageClass(){
// 			for(i = 0; i < 3; i++){
// 				pageClass[i].classList.remove('this_page');
// 			}
// 		};   
// }

$('#course').on('click', function(){$(".main").moveTo(2);});
$('#contacts').on('click', function(){$(".main").moveTo(4);});

//---------------------

	//слайдер на  3ей странице
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
})