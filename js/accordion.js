(function($) {
  // $(".accordion > li:eq(0) a")
  //   .addClass("active")
  //   .next()
  //   .slideDown();

  $(".accordion .accordion_buttons").click(function(j) {
    var dropDown = $(this)
      .closest("li")
      .find("div");

    $(this)
      .closest(".accordion")
      .find("div")
      .not(dropDown)
      .slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this)
        .closest(".accordion")
        .find(".accordion_buttons.active")
        .removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
})(jQuery);
