(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);





  if ($(window).width() < 768) {
    
$(document).ready(function() {
    $('#vertical').lightSlider({
              pager: false,
        gallery: false,
        speed: 1000, //ms'
        pauseOnHover: true,
        slideEndAnimation: false,
        pause: 1600,
        keyPress: true,
        controls: false,
        prevHtml: '',
        nextHtml: '',

                keyPress:true,
      item:4,
      vertical:true,
      verticalHeight:500,
      vThumbWidth:100,
                auto:true,
                loop:true,
      thumbItem:4,
      thumbMargin:0,
      slideMargin:0,
    });  
  });
 }
 else {
    $(document).ready(function() {
        $('#vertical').lightSlider({
                  pager: false,
            gallery: false,
            speed: 1000, //ms'
            pauseOnHover: true,
            slideEndAnimation: false,
            pause: 1600,
            keyPress: true,
            controls: false,
            prevHtml: '',
            nextHtml: '',
    
                    keyPress:true,
          item:4,
          vertical:true,
          verticalHeight:860,
          vThumbWidth:100,
                    auto:true,
                    loop:true,
          thumbItem:4,
          thumbMargin:0,
          slideMargin:0,
        });  
      });
 }

 