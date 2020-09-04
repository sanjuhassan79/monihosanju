

(function ($) {
  "use strict";

  
  $(window).on('scroll', function() {
    var scrollHeight = $('.home').height();
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > scrollHeight) {
        $('#main-menu').addClass('my-nav');
    } else {
        $('#main-menu').removeClass('my-nav');
    }
});



  
    // slick js
    var homeTwo = $('.post-slider').slick({
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipe: true,
      swipeToSlide: true,
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

//  var macy = Macy({
//    container: '#macy',
//      trueOrder: false,
//      waitForImages: true,
//      margin: 10,
//      columns: 4,
//      breakAt: {
//          1200: 4,
//          940: 3,
//          520: 2,
//          400: 1
//     }
//  });

//  macy.runOnImageLoad(function () {
//    var show = document.getElementById("macy");
//    show.classList.add("show");
//    macy.recalculate(true, true);
//  });

  //slick js
  var homeOne = $('.slider').slick({
    speed: 300,
    infinite: true,
    prevArrow: ".prev-main",
    nextArrow: ".next-main",
  });
  $(".slider").slick({

    // normal options...
    infinite: false,
  
    // the magic
    responsive: [{
  
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
  });



})(jQuery);












(function ($) {
  "use strict";

  
    // slick js
    var homeTwo = $('.post-slider').slick({
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipe: true,
      swipeToSlide: true,
      responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

//   var macy = Macy({
//     container: '#macy',
//     trueOrder: false,
//     waitForImages: true,
//     margin: 10,
//     columns: 4,
//     breakAt: {
//         1200: 4,
//         940: 3,
//         520: 2,
//         400: 1
//     }
// });

// macy.runOnImageLoad(function () {
//   var show = document.getElementById("macy");
//   show.classList.add("show");
//   macy.recalculate(true, true);
// });

  //slick js
  var homeOne = $('.slider').slick({
    speed: 300,
    infinite: true,
    prevArrow: ".prev-main",
    nextArrow: ".next-main",
  });
  $(".slider").slick({

    // normal options...
    infinite: false,
  
    // the magic
    responsive: [{
  
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
  });

})(jQuery);











































































