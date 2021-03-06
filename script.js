/* ------------------------ IMAGE FILE DECLARATIONS ------------------------ */
var rowTileImgEmpty = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536335999/nsm-mentor-landing/mentors-row-tile-empty.png";
var rowTileImgBanner = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536335999/nsm-mentor-landing/mentors-row-tile-banner.png";

var testimonialsNameAnn = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536424630/nsm-mentor-landing/testimonials-name-ann.png";
var testimonialsNameStudent = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536605427/nsm-mentor-landing/testimonials-name-student.png";

var testimonialsDescriptionAnn = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536424630/nsm-mentor-landing/testimonials-description.png";
var testimonialsDescriptionStudent = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536607025/nsm-mentor-landing/testimonials-description-student.png";

var testimonialsVideoAnn = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536416417/nsm-mentor-landing/testimonials-video-ann.png";
var testimonialsVideoStudent = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536416417/nsm-mentor-landing/testimonials-video-student.png";

var planToggleMonthly = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536629718/nsm-mentor-landing/price-table-plan-toggle-month.png";
var planToggleAnnual = "https://res.cloudinary.com/dtwyohvli/image/upload/v1536629718/nsm-mentor-landing/price-table-plan-toggle-annual.png";

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

  var $mentorsRowArrow = $(".mentors-row-arrow");
  var $mentorsRowTile = $(".mentors-row-tile");

  var $mentorsRowArrow1 = $("#mentors-row-arrow-1");
  var $mentorsRowTile_1_1 = $("#mentors-row-tile-1-1");
  var $mentorsRowTile_1_2 = $("#mentors-row-tile-1-2");
  var $mentorsRowTile_1_3 = $("#mentors-row-tile-1-3");
  var $mentorsRowTile_1_4 = $("#mentors-row-tile-1-4");
  var $mentorsRowTile_1_5 = $("#mentors-row-tile-1-5");
  var $mentorsRowTile_1_6 = $("#mentors-row-tile-1-6");

  var $mentorsRowArrow2 = $("#mentors-row-arrow-2");
  var $mentorsRowTile_2_1 = $("#mentors-row-tile-2-1");
  var $mentorsRowTile_2_2 = $("#mentors-row-tile-2-2");
  var $mentorsRowTile_2_3 = $("#mentors-row-tile-2-3");
  var $mentorsRowTile_2_4 = $("#mentors-row-tile-2-4");
  var $mentorsRowTile_2_5 = $("#mentors-row-tile-2-5");
  var $mentorsRowTile_2_6 = $("#mentors-row-tile-2-6");

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

  var $priceTablePlanToggle = $("#price-table-plan-toggle");
  var $priceTablePlan = $(".price-table-plan");
  var $priceTableBasicPlan = $("#price-table-basic-plan");
  var $priceTableAdvancedPlan = $("#price-table-advanced-plan");
  var $priceTableDeluxePlan = $("#price-table-deluxe-plan");


/* ------------------------- Function Declarations ------------------------- */
  function mentorRow1Scroll() {
    if($mentorsRowTile_1_2.attr("src") === rowTileImgBanner
    && $mentorsRowTile_1_4.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_1_1.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_3.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_2.attr("src", rowTileImgEmpty);
      $mentorsRowTile_1_4.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_1_1.attr("src") === rowTileImgBanner
    && $mentorsRowTile_1_3.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_1_2.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_6.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_1.attr("src", rowTileImgEmpty);
      $mentorsRowTile_1_3.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_1_2.attr("src") === rowTileImgBanner
    && $mentorsRowTile_1_6.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_1_1.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_5.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_2.attr("src", rowTileImgEmpty);
      $mentorsRowTile_1_6.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_1_1.attr("src") === rowTileImgBanner
    && $mentorsRowTile_1_5.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_1_6.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_4.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_1.attr("src", rowTileImgEmpty);
      $mentorsRowTile_1_5.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_1_6.attr("src") === rowTileImgBanner
    && $mentorsRowTile_1_4.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_1_5.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_3.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_6.attr("src", rowTileImgEmpty);
      $mentorsRowTile_1_4.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_1_5.attr("src") === rowTileImgBanner
    && $mentorsRowTile_1_3.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_1_4.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_2.attr("src", rowTileImgBanner);
      $mentorsRowTile_1_5.attr("src", rowTileImgEmpty);
      $mentorsRowTile_1_3.attr("src", rowTileImgEmpty);
    }
  }


  function mentorRow2Scroll() {
    if($mentorsRowTile_2_3.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_2_2.attr("src", rowTileImgBanner);
      $mentorsRowTile_2_3.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_2_2.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_2_1.attr("src", rowTileImgBanner);
      $mentorsRowTile_2_2.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_2_1.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_2_6.attr("src", rowTileImgBanner);
      $mentorsRowTile_2_1.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_2_6.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_2_5.attr("src", rowTileImgBanner);
      $mentorsRowTile_2_6.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_2_5.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_2_4.attr("src", rowTileImgBanner);
      $mentorsRowTile_2_5.attr("src", rowTileImgEmpty);
    }

    else if($mentorsRowTile_2_4.attr("src") === rowTileImgBanner) {
      $mentorsRowTile_2_3.attr("src", rowTileImgBanner);
      $mentorsRowTile_2_4.attr("src", rowTileImgEmpty);
    }
  }


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
    }, 600);
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


/* ---- MENTORS CONTAINER ---- */
  $mentorsRowArrow.mouseenter(function() {
    $(this).addClass("mentors-row-arrow-hover");
  });
  $mentorsRowArrow.mouseleave(function() {
    $(this).removeClass("mentors-row-arrow-hover");
  });

  $mentorsRowArrow.mousedown(function() {
    $(this).addClass("mentors-row-arrow-active");
  });
  $mentorsRowArrow.mouseup(function() {
    $(this).removeClass("mentors-row-arrow-active");
  });

  $mentorsRowArrow1.on("click", function() {
    mentorRow1Scroll();
  });
  $mentorsRowArrow2.on("click", function() {
    mentorRow2Scroll();
  });

  $mentorsRowTile.mouseenter(function() {
    $(this).addClass("mentors-row-tile-hover");
  });
  $mentorsRowTile.mouseleave(function() {
    $(this).removeClass("mentors-row-tile-hover");
  });

  $mentorsRowTile.mousedown(function() {
    $(this).addClass("mentors-row-tile-active");
  });
  $mentorsRowTile.mouseup(function() {
    $(this).removeClass("mentors-row-tile-active");
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

  $videoMainGhost.mousedown(function() {
    $testimonialsVideoMain.addClass("testimonials-video-active");
  });
  $videoMainGhost.mouseup(function() {
    $testimonialsVideoMain.removeClass("testimonials-video-active");
  });


/* --- PRICE TABLE CONTAINER --- */
  $priceTablePlanToggle.on("click", function() {
    if($priceTablePlanToggle.attr("src") === planToggleMonthly) {
      $priceTablePlanToggle.attr("src", planToggleAnnual);
    }
    else if($priceTablePlanToggle.attr("src") === planToggleAnnual){
      $priceTablePlanToggle.attr("src", planToggleMonthly);
    }
  });

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
