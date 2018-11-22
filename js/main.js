/*Portfolio*/
var portfolio = document.getElementById('portfolio');
var portfolioCo = document.getElementById('content-portfolio');
var withoutPortfolio = document.querySelectorAll('.cl-effect-4 li a');
var thisPage = document.querySelectorAll('.pages a');


/* Отображение пунктов меню*/
portfolio.onclick = function(){
	for(var i = 0; i < withoutPortfolio.length; i++){
	withoutPortfolio[i].classList.remove('this_page');	
	};
	portfolioCo.style.display = 'block';
    portfolio.classList.add('this_page');
}
portfolioCo.onclick = function(){
    portfolio.classList.remove('this_page');
    portfolioCo.style.display = 'none';
    if(page() == '03/04'){
   		withoutPortfolio[0].classList.add('this_page');
	}else if(page() == '04/04'){
		withoutPortfolio[2].classList.add('this_page');
	}
}


var page = function(){
	var p;
	for(var i = 0; i < thisPage.length; i++){
		if(thisPage[i].hasAttribute('data-number-pages'))
			p = thisPage[i].getAttribute('data-number-pages');
	}
	return p;
}
	console.log(page());
//----------------------------------------

/*--Переключение страниц по скроллу--*/

var pagesScroll = document.querySelectorAll('div.pages a');
var j = 0;
var a = 0;



for(i = 0; i < pagesScroll.length; i++){
	if(pagesScroll[i].hasAttribute('data-number-pages')){
		j = i - 1;
		a = i + 1;
		if(j < 0){
			j = pagesScroll.length - 1;
		}
		if(a >= pagesScroll.length){
			a = 0;
		}
	}
}
document.onwheel = function(event){
	if(event.deltaY < 0){
	document.location.href = pagesScroll[j];
	} else {
	document.location.href = pagesScroll[a];	
	}

}
/*----------------*/


/*---нажатие на меню---*/

$(function(){
	var $mt = $('nav #menu_toggle');
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


/*Плавность переключения*/
/*Barba.Pjax.start();
var ExpandTransition = Barba.BaseTransition.extend({
	start: function(){
		Promise
			.all([this.newContainerLoading, this.zoom()])
			.then(this.showNewPage.bind(this));
	},

	zoom: function(){
		var deferred = Barba.Utils.deferred();
		deferred.resolve();
		return deferred.promise;
	},
	showNewPage: function(){
		this.done();
	}
});

Barba.Pjax.getTransition = function(){
	var transitionObj = ExpandTransition;
	return transitionObj;
}
var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    document.body.scrollTop = 0;
    this.done();
  }
});*/
