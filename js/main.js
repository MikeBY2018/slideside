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