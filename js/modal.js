$(document).ready(function(){

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