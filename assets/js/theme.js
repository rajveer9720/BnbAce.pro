(function ($) {
  "use strict";

  // Mobile Menu
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    meanMenuOpen: "<span></span> <span></span> <span></span>",
    onePage: false,
  });

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
  //Header Search
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // animate
  new WOW().init();

  // Loder  //
  $(function () {
    $("body").addClass("loaded");
  });

  // Case Study Active
  $(".service_list").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: false,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });

  // brand-list
  $(".brand-list").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1170: {
        items: 4,
      },
      1300: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });

  // project-list
  $(".project-list").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-long-arrow-left''></i>",
      "<i class='fa fa-long-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 4,
      },
      1920: {
        items: 5,
      },
    },
  });

  // article-list
  $(".article-list").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1500: {
        items: 2,
      },
      1920: {
        items: 2,
      },
    },
  });

  /*---------------------
    WOW active js 
    --------------------- */
  new WOW().init();

  // counterUp
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /* Portfolio Isotope  */
  $(".image_load").imagesLoaded(function () {
    if ($.fn.isotope) {
      var $portfolio = $(".image_load");

      $portfolio.isotope({
        itemSelector: ".grid-item",

        filter: "*",

        resizesContainer: true,

        layoutMode: "masonry",

        transitionDuration: "0.8s",
      });
      $(".menu-filtering li").on("click", function () {
        $(".menu-filtering li").removeClass("current_menu_item");

        $(this).addClass("current_menu_item");

        var selector = $(this).attr("data-filter");

        $portfolio.isotope({
          filter: selector,
        });
      });
    }
  });

  // Venubox

  $(".venobox").venobox({
    numeratio: true,

    infinigall: true,
  });
  /*--------------------------
     scrollUp
    ---------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });

  // accordion js
  jQuery(document).ready(function ($) {
    "use strict";

    $(".accordion > li:eq(0) a").addClass("active").next().slideDown();

    $(".accordion a").click(function (j) {
      var dropDown = $(this).closest("li").find("p");

      $(this).closest(".accordion").find("p").not(dropDown).slideUp();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).closest(".accordion").find("a.active").removeClass("active");
        $(this).addClass("active");
      }

      dropDown.stop(false, true).slideToggle();

      j.preventDefault();
    });
  });

  // <!-- barfiller script -->

  $(document).ready(function () {
    $("#bar1").barfiller({ duration: 7000 });
    $("#bar2").barfiller({ duration: 7000 });
    $("#bar3").barfiller({ duration: 7000 });
  });

  // <!--jave script -->

  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
  });

  $(".go-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: "0",
      },
      1200
    );
  });

  // table tabs

  $(document).ready(function () {
    (function ($) {
      $(".tab ul.tabs")
        .addClass("active")
        .find("> li:eq(0)")
        .addClass("current");

      $(".tab ul.tabs li a").click(function (g) {
        var tab = $(this).closest(".tab"),
          index = $(this).closest("li").index();

        tab.find("ul.tabs > li").removeClass("current");
        $(this).closest("li").addClass("current");

        tab
          .find(".tab_content")
          .find("div.tabs_item")
          .not("div.tabs_item:eq(" + index + ")")
          .slideUp();
        tab
          .find(".tab_content")
          .find("div.tabs_item:eq(" + index + ")")
          .slideDown();

        g.preventDefault();
      });
    })(jQuery);
  });

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.now();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  // count down timer:
  var deadline = new Date(Date.now() + 235 * 60 * 42 * 60 * 1000);
  initializeClock("clockdiv", deadline);
})(jQuery);
