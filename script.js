$(document).ready(function() {

  var $navButton = $("#nav-button");
  var $valueButton = $("#value-button");
  var $mentorsRowArrow1 = $("#mentors-row-arrow-1");
  var $testimonialsArrowLeft = $("#testimonials-arrow-left");


  $navButton.mouseenter(function() {
    $(this).addClass("nav-button-hover");
  });
  $navButton.mouseleave(function() {
    $(this).removeClass("nav-button-hover");
  });


  $valueButton.mouseenter(function() {
    $(this).addClass("value-button-hover");
  });
  $valueButton.mouseleave(function() {
    $(this).removeClass("value-button-hover");
  });

});
