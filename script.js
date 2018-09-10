/* ------------------------ IMAGE FILE DECLARATIONS ------------------------ */
var testimonialsNameAnn = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536424630/nsm-mentor-landing/testimonials-name-ann.png";
var testimonialsNameStudent = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536605427/nsm-mentor-landing/testimonials-name-student.png";

var testimonialsDescriptionAnn = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536424630/nsm-mentor-landing/testimonials-description.png";
var testimonialsDescriptionStudent = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536607025/nsm-mentor-landing/testimonials-description-student.png";

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

  var $testimonialsName = $("#testimonials-name");
  var $testimonialsNameGhost = $("#testimonials-name-ghost");
  var $testimonialsDescription = $("#testimonials-description");
  var $testimonialsDescriptionGhost = $("#testimonials-description-ghost");
  var $testimonialsArrowLeft = $("#testimonials-arrow-left");
  var $testimonialsArrowRight = $("#testimonials-arrow-right");
  var $testimonialsVideoMain = $("#testimonials-video-main");
  var $videoMainGhost = $("#video-main-ghost");
  var $testimonialsVideoSub = $("#testimonials-video-sub");
  var $videoSubGhost = $("#video-sub-ghost");
  var suspendCrossFadeStart = false;

  var $priceTablePlan = $(".price-table-plan");
  var $priceTableBasicPlan = $("#price-table-basic-plan");
  var $priceTableAdvancedPlan = $("#price-table-advanced-plan");
  var $priceTableDeluxePlan = $("#price-table-deluxe-plan");


/* ------------------------- Function Declarations ------------------------- */

  function swapImages() {
    if($testimonialsVideoMain.attr("src") === testimonialsVideoAnn) {
      $testimonialsVideoMain.attr("src", testimonialsVideoStudent);
      $testimonialsVideoSub.attr("src", testimonialsVideoAnn);
      $testimonialsName.attr("src", testimonialsNameStudent);
      $testimonialsDescription.attr("src", testimonialsDescriptionStudent);


      $videoMainGhost.attr("src", testimonialsVideoAnn);
      $videoSubGhost.attr("src", testimonialsVideoStudent);
      $testimonialsNameGhost.attr("src", testimonialsNameAnn);
      $testimonialsDescriptionGhost.attr("src", testimonialsDescriptionAnn);
    }
    else if($testimonialsVideoMain.attr("src") === testimonialsVideoStudent) {
      $testimonialsVideoMain.attr("src", testimonialsVideoAnn);
      $testimonialsVideoSub.attr("src", testimonialsVideoStudent);
      $testimonialsName.attr("src", testimonialsNameAnn);
      $testimonialsDescription.attr("src", testimonialsDescriptionAnn);

      $videoMainGhost.attr("src", testimonialsVideoStudent);
      $videoSubGhost.attr("src", testimonialsVideoAnn);
      $testimonialsNameGhost.attr("src", testimonialsNameStudent);
      $testimonialsDescriptionGhost.attr("src", testimonialsDescriptionStudent);
    }
  }


  function crossFadeText() {
    $testimonialsNameGhost.removeClass("fade-out-fast");
    $testimonialsNameGhost.css("opacity", "10");

    $testimonialsDescriptionGhost.removeClass("fade-out-fast");
    $testimonialsDescriptionGhost.css("opacity", "10");

    setTimeout(function() {
      $testimonialsNameGhost.addClass("fade-out-fast");
      $testimonialsDescriptionGhost.addClass("fade-out-fast");
    }, 0);
  }


  function crossFadeMain() {
    suspendCrossFadeStart = true;

    $videoMainGhost.removeClass("fade-out");
    $videoMainGhost.css("opacity", "10");

    setTimeout(function() {
      $videoMainGhost.addClass("fade-out");
    }, 0);

    setTimeout(function() {
      suspendCrossFadeStart = false;
    }, 800);
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

  $navButton.mousedown(function() {
    $(this).addClass("nav-button-active");
  });
  $navButton.mouseup(function() {
    $(this).removeClass("nav-button-active");
  });

  $valueButton.mouseenter(function() {
    $(this).addClass("value-button-hover");
  });
  $valueButton.mouseleave(function() {
    $(this).removeClass("value-button-hover");
  });

  $valueButton.mousedown(function() {
    $(this).addClass("value-button-active");
  });
  $valueButton.mouseup(function() {
    $(this).removeClass("value-button-active");
  });


/* -- TESTIMONIALS CONTAINER -- */
  $testimonialsArrowLeft.mouseenter(function() {
    $(this).addClass("testimonials-arrow-hover-left");
  });
  $testimonialsArrowLeft.mouseleave(function() {
    $(this).removeClass("testimonials-arrow-hover-left");
  });
  $testimonialsArrowLeft.on("click", function() {
    if(suspendCrossFadeStart === false) {
      swapImages();
      crossFadeText();
      crossFadeMain();
      crossFadeSub();
    }
  });

  $testimonialsArrowRight.mouseenter(function() {
    $(this).addClass("testimonials-arrow-hover-right");
  });
  $testimonialsArrowRight.mouseleave(function() {
    $(this).removeClass("testimonials-arrow-hover-right");
  });
  $testimonialsArrowRight.on("click", function() {
    if(suspendCrossFadeStart === false) {
      swapImages();
      crossFadeText();
      crossFadeMain();
      crossFadeSub();
    }
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

  $priceTablePlan.mousedown(function() {
    $(this).addClass("price-table-plan-active");
  });
  $priceTablePlan.mouseup(function() {
    $(this).removeClass("price-table-plan-active");
  });


});
