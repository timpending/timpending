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
  // Running Typist Function
  typistChange(1500)

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
