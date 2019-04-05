

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


$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll+$(window).height() >= $('.portfolio__title').offset().top) {
    $('.portfolio__title').addClass("slideInRightAnimated")
    setTimeout(function () {
      $('.portfolio__subtitle').addClass("slideInRightAnimated")
    }, 500);
    
  }  

  var i = 0;
  if (scroll+$(window).height() >= $('.portfolio__body__entry').offset().top) {
    $('.portfolio__body').children().each(function(){

      var child = $(this);
      setTimeout(function () {
        child.addClass("slideInDownAnimated");
      }, 500 + i);
      i += 100;
    })  
  }  
});