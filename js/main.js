/*Portfolio*/
var portfolio = document.getElementById('portfolio');
var portfolioCo = document.getElementById('content-portfolio');
var withoutPortfolio = document.querySelector('.cl-effect-4 li a');


portfolio.onclick = function(){
    portfolio.classList.add('this_page');
    portfolioCo.style.display = 'block';
    withoutPortfolio.classList.remove('this_page');
}
portfolioCo.onclick = function(){
    portfolio.classList.remove('this_page');
    portfolioCo.style.display = 'none';
}


