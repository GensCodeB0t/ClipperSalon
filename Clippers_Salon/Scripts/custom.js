/*****************************************/

/* Author: Design grid */
/* Template: ZYAll- One Page Template for Portfolio & Business. */
/* Version: 1.0.1 */

/*****************************************/

$(function () {

  "use strict";

  var wind = $(window);


  /* smooth scroll
  -------------------------------------------------------*/
  $.scrollIt({

    easing: 'swing',      // the easing function for animation
    scrollTime: 900,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: -63
  });


  /* navbar scrolling background and change logo
  -------------------------------------------------------*/
  wind.on("scroll",function () {

      var bodyScroll = wind.scrollTop(),
          navbar = $(".navbar");

      if(bodyScroll > 130){

          navbar.addClass("nav-scroll");
          $('.navbar-b img').attr('src','assets/img/logo.png');


      }else{

          navbar.removeClass("nav-scroll");
          $('.navbar-b img').attr('src','assets/img/logo-2.png');

      }

  });


  /* sections background image from data background
  -------------------------------------------------------*/
  $( ".cover-bg" ).each(function() {
    var attr = $(this).attr('data-image-src');

    if (typeof attr !== typeof undefined && attr !== false) {
      $(this).css('background-image', 'url('+attr+')');
    }

  });

  /* sections background color from data background
  -------------------------------------------------------*/
  $("[data-background-color]").each(function() {
      $(this).css("background-color", $(this).attr("data-background-color")  );
  });


  /* progress bar
  -------------------------------------------------------*/
  wind.on('scroll', function () {
      $(".bar span").each(function () {
          var bottom_of_object =
          $(this).offset().top + $(this).outerHeight();
          var bottom_of_window =
          $(window).scrollTop() + $(window).height();
          var myVal = $(this).attr('data-width');
          if(bottom_of_window > bottom_of_object) {
            $(this).css({
              width : myVal
            });
          }
      });
  });


  /* circleProgress
  -------------------------------------------------------*/
  $('#hclient, #pr-done, #aw-won, #h-cus').circleProgress({
    size: 160,
     lineCap: "round",
     startAngle: -Math.PI,

     fill: {
        gradient: ["#5e5e5e", "#1c1c1c"]
     },
  });

  $('.counter #hclient, .counter #pr-done, .counter #aw-won, .counter #h-cus').circleProgress({
    size: 160,
     lineCap: "round",
     startAngle: -Math.PI,

     fill: {
        gradient: ["#81c0ff", "#2388ed"]
     },
  });

  $('#hclient').circleProgress({
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h4').html(Math.round(321 * progress));
  });

  $('#pr-done').circleProgress({
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h4').html(Math.round(144 * progress));
  });

  $('#aw-won').circleProgress({
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h4').html(Math.round(64 * progress));
  });

  $('#h-cus').circleProgress({
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h4').html(Math.round(133 * progress));
  });
  /* End circleProgress
  -------------------------------------------------------*/


  /* typejs
  -------------------------------------------------------*/
  $('.header .caption h5 span').typed({
    strings: ["Ui/Ux Designer","Photographic","Web devoloper"],
    loop: true,
    startDelay: 1000,
    backDelay: 2000
  });



  /* Tabs About
  -------------------------------------------------------*/
  $(".about").on("click", ".nav-tab li", function(){

    var myID = $(this).attr("id");

    $(this).addClass("active").siblings().removeClass("active");


    $("#" + myID + "-content").fadeIn().siblings().hide();

  });


  /* Tabs Feature
  -------------------------------------------------------*/
  $(".feature-section").on("click", "li", function(){

      var myID = $(this).attr("id");
      var currentTab = 'tab-1-content';

      $(this).addClass("active-btn").siblings().removeClass("active-btn");

      $("#" + myID + "-content").fadeIn().siblings().hide();

  });

  /* owl carousel Header
  -------------------------------------------------------*/
  $('.demo-slider .owl-carousel').owlCarousel({
      autoplay:true,
      items:1,
      margin:0,
      loop: true,
      stagePadding:0,
      smartSpeed:600,
      dots: true,
      nav: true,
      navText:['<span> <i class="jam jam-angle-left"></i> </span>',
      '<span> <i class="jam jam-angle-right"></i> </span>'],
      responsive:{
      0:{
        nav: false,
        items:1,
      },
      991:{
        autoplay:true,
        items:1,
        loop:true,
      }
    }
  });

  var owl = $('.demo-slider .owl-carousel');
  // add animate.css class(es) to the elements to be animated
   function setAnimation ( _elem, _InOut ) {
     // Store all animationend event name in a string.
     // cf animate.css documentation
     var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

     _elem.each ( function () {
       var $elem = $(this);
       var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

       $elem.addClass($animationType).one(animationEndEvent, function () {
         $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
       });
     });
   }

  // Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
     var $currentItem = $('.owl-item', owl).eq(event.item.index);
     var $elemsToanim = $currentItem.find("[data-animation-out]");
     setAnimation ($elemsToanim, 'out');
  });

    // Fired after current slide has been changed
   owl.on('changed.owl.carousel', function(event) {

       var $currentItem = $('.owl-item', owl).eq(event.item.index);
       var $elemsToanim = $currentItem.find("[data-animation-in]");
       setAnimation ($elemsToanim, 'in');
   });


  /* Owl Caroursel testimonial
  -------------------------------------------------------*/
  $('.testimonial .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    items:2,
    margin:30,
    dots: false,
    nav: true,
    navText:['<span> <i class="jam jam-angle-left"></i> </span>',
        '<span> <i class="jam jam-angle-right"></i> </span>'],
    responsive:{
      0:{
        autoplay:true,
        loop: true,
        items:1,
      },
      1000:{
        autoplay:true,
        items:2,
        loop:true,
      }
    }
  });

  $('.testimonial-style2 .owl-carousel , .testimonial-style-3 .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    items:1,
    margin:30,
    dots: true,
    nav: false,
    navText:['<span> <i class="jam jam-angle-left"></i> </span>',
        '<span> <i class="jam jam-angle-right"></i> </span>'],
  });


    /* Owl Caroursel team
  -------------------------------------------------------*/
  $('.team .owl-carousel').owlCarousel({
    loop:true,
    margin: 30,
    mouseDrag:false,
    autoplay:true,
    smartSpeed:500,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:4
        }
    }
  });


  /* YouTubePopUp
  -------------------------------------------------------*/
  $("a.vid").YouTubePopUp();


  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $('#contact-form').validator();


  // when the form is submitted
  $('#contact-form').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
          var url = "contact.php";

          // POST values in the background the the script URL
          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data)
              {
                  // data = JSON object that contact.php returns

                  // we recieve the type of the message: success x danger and apply it to the
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  // let's compose Bootstrap alert box HTML
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                  // If we have messageAlert and messageText
                  if (messageAlert && messageText) {
                      // inject the alert to .messages div in our form
                      $('#contact-form').find('.messages').html(alertBox);
                      // empty the form
                      $('#contact-form')[0].reset();
                  }
              }
          });
          return false;
      }
  });


});


$(window).on("load",function (){

  /* Preloader
  -------------------------------------------------------*/
  $("#preloader").fadeOut(500);


  /* isotope
  -------------------------------------------------------*/
  var $gallery = $('.gallery').isotope({});
  $('.gallery').isotope({

      // options
      itemSelector: '.item-img',
      transitionDuration: '0.5s',

  });


  $(".gallery .single-image").fancybox({
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn'   : 600,
    'speedOut'    : 200,
    'overlayShow' : false
  });


  /* filter items on button click
  -------------------------------------------------------*/
  $('.filtering').on( 'click', 'button', function() {

      var filterValue = $(this).attr('data-filter');

      $gallery.isotope({ filter: filterValue });

      });

  $('.filtering').on( 'click', 'button', function() {

      $(this).addClass('active').siblings().removeClass('active');

  });

})
