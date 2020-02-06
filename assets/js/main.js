(function ($) {
  "user strict";
  // Preloader Js
  $(window).on('load', function () {
    $('.preloader').fadeOut(500);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
    var $gallery = $(".gallery-wrapper");
    $gallery.isotope({
      itemSelector: '.gallery-item',
      masonry: {
        columnWidth: 0,
      }
    });
  });
  $(document).ready(function () {
    // Nice Select
    $('.select-bar').niceSelect();
    // Lightcase 
    $('a[data-rel^=lightcase]').lightcase();
    // Wow js active
    new WOW().init();
    //Faq
    $('.faq-wrapper .faq-title').on('click', function (e) {
      var element = $(this).parent('.faq-item');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faq-content').removeClass('open');
        element.find('.faq-content').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('.faq-content').slideDown(300, "swing");
        element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
        element.siblings('.faq-item').removeClass('open');
        element.siblings('.faq-item').find('.faq-title').removeClass('open');
        element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
      }
    });
    //MenuBar
    $('.header-bar').on('click', function () {
        $(".menu").toggleClass("active");
        $(".header-bar").toggleClass("active");
        $('.overlay').toggleClass('active');
    });
    //Menu Dropdown Icon Adding
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('.submenu').parent('li').hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos
        });
      }
    });
    $('.menu li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    // Header Sticky Here
    // Header Sticky Here
    var header = $(".header-section, .header-fix");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 1) {
        header.removeClass("active");
        header.addClass("anime-header");
      } else {
        header.addClass("active");
        header.removeClass("anime-header");
      }
    });
    //Tab Section
    $('.tab ul.tab-menu').addClass('active').find('> li:eq(0)').addClass('active');
    $('.tab ul.tab-menu li').on('click', function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
      tab.find('li').siblings('li').removeClass('active');
      $(this).closest('li').addClass('active');
      tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').hide(150);
      tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').show(150);
      g.preventDefault();
    });
    //Odometer
    $(".counter-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
    $('.team-item').on('mouseover', function() {
      $('.team-item').removeClass('active');
      $(this).addClass('active');
    })
    //Sliders Here
    var swiper = new Swiper('.sponsor-slider', {
      slidesPerView: 4,
      loop: true,
      breakpoints: {
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
      }
    });
    var swiper = new Swiper('.client-slider', {
      slidesPerView: 3,
      // effect: 'coverflow',
      loop: true,
      pagination: {
        el: '.client-pagination',
        clickable: true,
      },
      breakpoints: {
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2500,
      }
    });
    var overlay = $('.overlay');
    overlay.on('click', function() {
      $(this).removeClass('active');
      $('.menu').removeClass('active');
      $('.header-bar').removeClass('active');
    });
    $('#view-pass-01').on('click', function () {
      var x = document.getElementById("pass01");
      if (x.type === "password") {
        x.type = "text";
        $('#view-pass-01 .flaticon-eye').addClass('flaticon-hide');
        $('#view-pass-01 .flaticon-eye').removeClass('flaticon-eye');
      } else {
        x.type = "password";
        $('#view-pass-01 .flaticon-hide').addClass('flaticon-eye');
        $('#view-pass-01 .flaticon-hide').removeClass('flaticon-hide');
      }
    });
    $('#view-pass-02').on('click', function () {
      var x = document.getElementById("pass02");
      if (x.type === "password") {
        x.type = "text";
        $('#view-pass-02 .flaticon-eye').addClass('flaticon-hide');
        $('#view-pass-02 .flaticon-eye').removeClass('flaticon-eye');
      } else {
        x.type = "password";
        $('#view-pass-02 .flaticon-hide').addClass('flaticon-eye');
        $('#view-pass-02 .flaticon-hide').removeClass('flaticon-hide');
      }
    });
    $('#view-pass-03').on('click', function () {
      var x = document.getElementById("pass03");
      if (x.type === "password") {
        x.type = "text";
        $('#view-pass-03 .flaticon-eye').addClass('flaticon-hide');
        $('#view-pass-03 .flaticon-eye').removeClass('flaticon-eye');
      } else {
        x.type = "password";
        $('#view-pass-03 .flaticon-hide').addClass('flaticon-eye');
        $('#view-pass-03 .flaticon-hide').removeClass('flaticon-hide');
      }
    });
    //Reply Button
    $('.btn-one').on('click', function() {
      $(".reply-one").toggleClass("active");
    })
    $('.btn-two').on('click', function () {
      $(".reply-two").toggleClass("active");
    })
    $('.cross').on('click', function() {
      $('.account-section').removeClass('active');
    });
    $('.account-wrapper .tab-menu li').on('click', function (e) {
      $('.account-wrapper .account-item').toggleClass('active');
    })
    $('.sign-in-button').on('click', function() {
      $('.account-section').addClass('active');
    });
    $('.feature--thumb').tilt({
      reset: true
    });
  });
})(jQuery);
