/* ------------------------ IMAGE FILE DECLARATIONS ------------------------ */
var testimonialsVideoAnn = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536416417/nsm-mentor-landing/testimonials-video-ann.png";
var testimonialsVideoStudent = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536416417/nsm-mentor-landing/testimonials-video-student.png";

var basicPlanImg = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536461113/nsm-mentor-landing/price-table-basic-plan.png";
var advancedPlanImg = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536461113/nsm-mentor-landing/price-table-advanced-plan.png";
var deluxePlanImg = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536461113/nsm-mentor-landing/price-table-deluxe-plan.png";

var basicPlanImgActive = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536468032/nsm-mentor-landing/price-table-basic-plan-active.png";
var advancedPlanImgActive = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536461741/nsm-mentor-landing/price-table-advanced-plan-active.png";
var deluxePlanImgActive = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536505044/price-table-deluxe-plan-active_quhzsf.png";


$(document).ready(function() {

/* ------------------------- VARIABLE DECLARATIONS ------------------------- */
  var $navButton = $("#nav-button");
  var $valueButton = $("#value-button");

  var $mentorsRowArrow1 = $("#mentors-row-arrow-1");

  var $testimonialsArrowLeft = $("#testimonials-arrow-left");
  var $testimonialsArrowRight = $("#testimonials-arrow-right");
  var $testimonialsVideoMain = $("#testimonials-video-main");
  var $videoMainGhost = $("#video-main-ghost");
  var $testimonialsVideoSub = $("#testimonials-video-sub");
  var $videoSubGhost = $("#video-sub-ghost");

  var $priceTableBasicPlan = $("#price-table-basic-plan");
  var $priceTableAdvancedPlan = $("#price-table-advanced-plan");
  var $priceTableDeluxePlan = $("#price-table-deluxe-plan");


/* ------------------------- Function Declarations ------------------------- */

  function swapImages() {
    if($testimonialsVideoMain.attr("src") === testimonialsVideoAnn) {
      $testimonialsVideoMain.attr("src", testimonialsVideoStudent);
      $testimonialsVideoSub.attr("src", testimonialsVideoAnn);

      $videoMainGhost.attr("src", testimonialsVideoAnn);
      $videoSubGhost.attr("src", testimonialsVideoStudent);
    }
    else if($testimonialsVideoMain.attr("src") === testimonialsVideoStudent) {
      $testimonialsVideoMain.attr("src", testimonialsVideoAnn);
      $testimonialsVideoSub.attr("src", testimonialsVideoStudent);

      $videoMainGhost.attr("src", testimonialsVideoStudent);
      $videoSubGhost.attr("src", testimonialsVideoAnn);
    }
  }


  function crossFadeMain() {
    $videoMainGhost.removeClass("fade-out");
    $videoMainGhost.css("opacity", "10");

    setTimeout(function() {
      $videoMainGhost.addClass("fade-out");
    }, 0);
  }


  function crossFadeSub() {
    $videoSubGhost.removeClass("fade-out");
    $videoSubGhost.css("opacity", "10");

    setTimeout(function() {
      $videoSubGhost.addClass("fade-out");
    }, 0);
  }


/* ---------------------------- EVENT HANDLERS ---------------------------- */

/* ----- VALUE CONTAINER ----- */
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


/* -- TESTIMONIALS CONTAINER -- */
  $testimonialsArrowLeft.mouseenter(function() {
    $(this).addClass("testimonials-arrow-hover-left");
  });
  $testimonialsArrowLeft.mouseleave(function() {
    $(this).removeClass("testimonials-arrow-hover-left");
  });
  $testimonialsArrowLeft.on("click", function() {
    swapImages();

    crossFadeMain();
    crossFadeSub();
  });

  $testimonialsArrowRight.mouseenter(function() {
    $(this).addClass("testimonials-arrow-hover-right");
  });
  $testimonialsArrowRight.mouseleave(function() {
    $(this).removeClass("testimonials-arrow-hover-right");
  });
  $testimonialsArrowRight.on("click", function() {
    swapImages();

    crossFadeMain();
    crossFadeSub();
  });

  $videoMainGhost.mouseenter(function() {
    $testimonialsVideoMain.addClass("testimonials-video-hover");
  });
  $videoMainGhost.mouseleave(function() {
    $testimonialsVideoMain.removeClass("testimonials-video-hover");
  });


/* --- PRICE TABLE CONTAINER --- */
  $priceTableBasicPlan.mouseenter(function() {
    $(this).attr("src", basicPlanImgActive);

    $priceTableAdvancedPlan.attr("src", advancedPlanImg);
    $priceTableDeluxePlan.attr("src", deluxePlanImg);
  });

  $priceTableAdvancedPlan.mouseenter(function() {
    $(this).attr("src", advancedPlanImgActive);

    $priceTableBasicPlan.attr("src", basicPlanImg);
    $priceTableDeluxePlan.attr("src", deluxePlanImg);
  });

  $priceTableDeluxePlan.mouseenter(function() {
    $(this).attr("src", deluxePlanImgActive);

    $priceTableBasicPlan.attr("src", basicPlanImg);
    $priceTableAdvancedPlan.attr("src", advancedPlanImg);
  });


});
