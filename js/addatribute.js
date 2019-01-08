$('#course').on('click', function(){
  var a = $(document).width();
  if(a < 550) {
    $('#course').attr('href','../index.html#page_02');
  } else {
     window.location.href = '../index.html';
     setTimeOut(function(){
      $(".main").moveTo(2);
     },10)
  }
});

$('#contacts').on('click', function(){
  var a = $(document).width();
  if(a < 550) {
    $('#contacts').attr('href','../index.html#page_04');
  } else {
     window.location.href = '../index.html';
  }
});