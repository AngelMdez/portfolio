$("#showmore").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("main").offset().top
  }, 1000);
});


$(".portfolio__body__entry").on('mouseenter mouseleave', function(e){
    $(this).children("h3").toggleClass("hidden fadeInDownAnimatedFast") ; 
})

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
  var i = 0;
  if (scroll+$(window).height() >= $('.entry__content').offset().top) {
    $('.entry__content').children().each(function(){

      var child = $(this);
      setTimeout(function () {
        child.addClass("slideInDownAnimated");
      }, 500 + i);
      i += 100;
    })  
  }

  if (scroll+$(window).height() >= $('.portfolio__title').offset().top) {
    $('.portfolio__title').addClass("slideInRightAnimated")
    setTimeout(function () {
      $('.portfolio__subtitle').addClass("slideInRightAnimated")
    }, 500);

    $('.portfolio__body').children().each(function(){

      var child = $(this);
      setTimeout(function () {
        child.addClass("slideInDownAnimated");
      }, 500 + i);
      i += 100;
    })  
    
  }  

  var i = 0;

  /* if (scroll+$(window).height() >= $('.portfolio__body__entry').offset().top) {
    $('.portfolio__body').children().each(function(){

      var child = $(this);
      setTimeout(function () {
        child.addClass("slideInDownAnimated");
      }, 500 + i);
      i += 100;
    })  
  }   */
});