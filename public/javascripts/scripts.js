;(function () {
    "use strict";

    var $window, $document, $body;

    $window = $(window);
    $document = $(document);
    $body = $("body");


    /*==============================================
     Pre loader init
     ===============================================*/
    // $window.on("load", function () {
    //     $body.imagesLoaded(function () {
    //         $(".tb-preloader-wave").fadeOut();
    //         $("#tb-preloader").delay(200).fadeOut("slow").remove();
    //     });
    // });

    // WOW Init
      if (typeof WOW == "function")
          new WOW().init();

    $document.ready(function () {

    //Menuzord Init
    $(".js-primary-navigation").menuzord();

    // One Parge Nav
     $(".op-nav li").on("click", function () {
         if ($(".showhide").is(":visible")) {
             $(".showhide").trigger("click");
         }
     });



     if ($.fn.onePageNav) {
          $(".op-nav").onePageNav({
              currentClass: "active"
          });
      }

     //Sticky Nav Init
     function initSticky() {
         var $navbarSticky, navbarHeight, $brandLogo, centerLogoNormalHeight, centerLogoStickyHeight;
         $navbarSticky = $(".js-navbar-sticky").not(".l-navbar_s-left");
         navbarHeight = $navbarSticky.height();
         $brandLogo = $(".logo-brand");
         centerLogoNormalHeight = 100;
         centerLogoStickyHeight = 60;

         if ($navbarSticky.hasClass("l-navbar_s-center")) {
             $brandLogo.height(centerLogoNormalHeight);
         }

         $navbarSticky.sticky({
             className: "l-navbar-wrapper_has-sticky",
             wrapperClassName: "l-navbar-wrapper",
             zIndex: 10000,
             bottomSpacing: 100
         }).on("sticky-start", function() {
             if ($navbarSticky.hasClass("l-navbar_s-center")) {
                 $brandLogo.height(0);
                 setTimeout(function() {
                     $brandLogo.addClass("sticky-fix").height(centerLogoStickyHeight);
                 }, 300);
             }
         }).on("sticky-end", function () {
             $navbarSticky.parent().height(navbarHeight);
             if ($navbarSticky.hasClass("l-navbar_s-center")) {
                 $brandLogo.removeClass("sticky-fix").height(centerLogoNormalHeight);
             }
         });
     }
     initSticky();

     // Running Typist Function
     typistChange(1500)

     // Defining Typist Function
     function typistChange(ms) {
       var wordArray = ['Designs', 'Develops', 'Troubleshoots', 'Enjoys every minute of it all']
       let typistClass = $('.typist')
       for (let i = 0; i < wordArray.length; i++) {
         if (i==0){
           typistClass.typist({
                 letterInterval: 80,
                 text: ''
             })
             .typistPause(ms/2)
             .typistAdd(wordArray[i])
             .typistPause(ms)
             .typistRemove(wordArray[i].length+1)
         } else if (i==wordArray.length-1 ){
           $('.typist').typistAdd(wordArray[i])
         } else {
           $('.typist').typistAdd(wordArray[i])
           .typistPause(ms)
           .typistRemove(wordArray[i].length)
         }
       }
     }


  });
})(jQuery);
