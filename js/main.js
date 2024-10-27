jQuery(".w").on("click", function () {
  jQuery(".z").slideToggle(200);
});

jQuery(window).on("scroll", function () {
  if (80 < jQuery(this).scrollTop()) {
    jQuery(".top-go").fadeIn(300);
  }
});

jQuery(window).on("scroll", function () {
  if (80 > jQuery(this).scrollTop()) {
    jQuery(".top-go").fadeOut();
  }
});

jQuery(".top-go").on("click", function () {
  jQuery("html, body").animate({ scrollTop: 0.5 });
});
