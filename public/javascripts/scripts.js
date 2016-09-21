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
    $document.ready(function () {

    /* WOW Ini */
    if (typeof WOW == "function")
        new WOW().init();

    /* Typist Init */
    // if (typeof Typist == "function") {
    //     new Typist(document.querySelector(".typist-element"), {
    //         letterInterval: 60,
    //         textInterval: 3000
    //     });
    // }
    $('.typist')
      .typist({
          letterInterval: 80,
          text: ''
      })
      .typistAdd('Develops ')
      .typistPause(1500)
      .typistRemove(('develops ').length)
      .typistAdd('Designs ')
      .typistPause(1500)
      .typistRemove(('designs ').length)
      .typistAdd('Troubleshoots ')
      .typistPause(1500)
      .typistRemove(('Troubleshoots ').length)
      .typistAdd('Enjoys every minute of it all.')



  });
})(jQuery);
