$(document).ready(function() {
    $("body").css("opasity", "0");

    $("body").fadeIn(500);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(500, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});/**/




/*$(document).ready(function(){ 
  var body = $("body"); 
  body.fadeIn(200); 
  $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function(e) { 
  e.preventDefault(); 
  $("body").fadeOut(200); 
  var self = this;
  setTimeout(function () { 
    window.location.href = $(self).attr("href"); 
  }, 200); 
  });
}); /**/
