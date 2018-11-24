$(document).ready(function(){

	var elements = $('.modal-overlay, .modal');
	$('#portfolio').click(function(){
	    elements.addClass('active');
	});

	$('.close-modal').click(function(){
	    elements.removeClass('active');
	});

});