$(() => {});

  $(".review")
    .mouseenter(function() {
      $(".review__text-button", this).css({
        top: "0px",
        opacity: "1"
      });
    })
    .mouseleave(function() {
      $(".review__text-button", this).css({
        top: "-150px",
        opacity: "0"
      });
    });



