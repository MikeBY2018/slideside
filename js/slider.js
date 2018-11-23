/*слайдшоу*/
var slideNow = 1;
var translateHeight = 0;
var slideInterval = 3000;
var slideCount = $('#slidewrapper').children().length;
// console.log(slideCount);

var windowSlide = document.getElementById('windowSlider');
var oneSlide =  document.querySelector('.uxui').offsetHeight;
var oneSlide1 = $('#viewport').height() / slideCount;


function nextSlide() {
    
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateHeight = -$('#viewport').height()/slideCount * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(0 ,' + translateHeight + 'px)',
            '-webkit-transform': 'translate(0, ' + translateHeight + 'px)',
            '-ms-transform': 'translate(0, ' + translateHeight + 'px)',
        });
        slideNow++; 
    };
};

windowSlide.style.height = oneSlide1  + 'px';
console.log(oneSlide);     
console.log(oneSlide1);     
     


/*Время, через которое запускается функция слайда*/
$(document).ready(function () {
    setInterval(nextSlide, slideInterval);
}); 

