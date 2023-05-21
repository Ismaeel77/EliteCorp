$(function () {
  "use strict";

  var windH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();

  $(".slider, .carousel-item").height(windH - (upperH + navH));

  $(".work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".img-shuffle .col-sm").css("opacity", "1");
    } else {
      $(".img-shuffle .col-sm").css("opacity", ".08");
      $($(this).data('class')).parent().css("opacity", "1");
    }
  });
});
