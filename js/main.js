$(function() {
  var text = $(".text");
  var position = $(".position");
  text.removeClass("hidden");
  setTimeout(
    function() 
    {
      position.removeClass("hidden");
    }, 2000);
});


/*$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    text.removeClass("hidden");
  } else {
    text.addClass("hidden");
  }
});*/