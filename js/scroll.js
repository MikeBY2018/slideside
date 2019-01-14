$('document').ready(function() {
//*подгрузка Portfolio и нажатие на пункт меню. модальное окно

  	// $('#programm').load('../work/template/programm.html');
  	// $('#teachers').load('../work/template/teachers.html');

  	$('#photorewiev').load('../work/template/photorewiev.html', function(){
  		$('.owl-carousel').owlCarousel({
		    loop:true,
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
		            margin:10,
		            nav:true,
		            loop:false
		        }
		    }
		})
  	});

// функция работы формы на втором слайде при наведении на курсы
  	var featuresItem = $('.features_item');
  	featuresItem.mouseenter(function(){
  		var indexHover = featuresItem.index(this); // получение номера элемента в массиве!!
  		$('#welcomepage1').load('../work/template/form.html', function(){
  			checkLabel();
  			checkHover();
  		}); // подгрузка в модальные окна на второй странице  	
  		function checkHover() {	
  		 	var checkboxInput = document.querySelectorAll('#welcomepage1 input[type=checkbox]');
  		 	checkboxInput[indexHover].checked = true;
  		}
  	});
// закончена  	
  	// if(classNameBody == 'viewing-page-4'){}
  		$('#formfinish').load('../work/template/form.html',function(){checkLabel();});
	//загрузка формы на последнюю страницу
});

	$('#about').click(function(j) {		
		$('#welcomepage').load('../work/template/form.html', function(){
			checkLabel();
		});//загрузка формы на первую страницу
	});



function checkLabel(){
	var checkbox = document.querySelectorAll('#pageall label');
	console.log(checkbox.length);
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
	/*$(function(){
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


	$(function(){
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




//scroll
// $(".main").onepage_scroll({
//    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//    easing: "linear",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//    animationTime: 600,             // AnimationTime let you define how long each section takes to animate
//    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//    beforeMove: function(index) {/*animateStars();*/},  // This option accepts a callback function. The function will be called before the page moves.
//    afterMove: function(index){}, 		// This option accepts a callback function. The function will be called after the page moves.
//    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//    keyboard: true,                  // You can activate the keyboard controls
//    responsiveFallback: 550,        // You can fallback to normal page scroll by defining the width of the browser in which
//                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//                                     // the browser's width is less than 600, the fallback will kick in.
//    direction: "vertical"          // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
// });

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
$('#course').on('click', function(){
	var a = $(document).width();
	if(a < 550) {
		$('#course').attr('href','#page_02');
	}
});

$('#contacts').on('click', function(){
	var a = $(document).width();
	if(a < 550) {
		$('#contacts').attr('href','#page_04');
	}
});

//слайдер на  3ей странице



	// $(window).resize(function() {
	//   adaptive();
	// }),
	//   $(".carousel").ready(function() {
	//     adaptive();
	//   }),
	//   $(function() {
	//     $(".nav_images .img img").click(function() {
	//       var a = $(this).attr("src");
	//       $(".section_4_block").css({
	//         background: "url(" + a + ")",
	//         backgroundPosition: "center",
	//         backgroundSize: "cover"
	//       });
	//     }),
	//       adaptive(),
	//       $(window).resize(function() {
	//         adaptive();
	//       }),
	//       $(window).on("orientationchange", function() {
	//         adaptive();
	//       });
	//   });
	// function adaptive() {
	//   var a = $(window).width();
	//   1350 > a
	//     ? ($(".header .carousel").css({ marginLeft: "-" + (1350 - a) / 2 + "px" }),
	//       $(".commIcons_3").css({ opacity: 0 }),
	//       $(".header .carousel-indicators").css({
	//         marginLeft: (180 - a) / 5 + "px"
	//       }),
	//       540 < a
	//         ? $(".inform").css({ marginLeft: (1350 - a) / 2.6 + "px" })
	//         : $(".inform").css({ marginLeft: "35px" }))
	//     : ($(".header .carousel").css({ marginLeft: "0" }),
	//       $(".inform").css({ marginLeft: "0px" }));
	// }
