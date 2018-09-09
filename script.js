/* ------------------------ IMAGE FILE DECLARATIONS ------------------------ */
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

  var $priceTableBasicPlan = $("#price-table-basic-plan");
  var $priceTableAdvancedPlan = $("#price-table-advanced-plan");
  var $priceTableDeluxePlan = $("#price-table-deluxe-plan");


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
