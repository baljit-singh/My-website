/**
 * Created by home on 4/13/2016.
 */
/**
 * Created by home on 4/10/2016.
 */
/**
 * Created by home on 4/10/2016.
 */

       var height= $(window).height()
       $(".contentContainer").css("min-height",height);

     $(window).scroll(function() {
    if($(this).scrollTop() > 600){
        $('.navbar').addClass('navbar-inverse');
    }
    //else if(($(this).scrollTop() < 600) && (($(window).width() < 760))){
    //     $('.navbar').addClass('navbar-inverse');
    //}
    else {
        $('.navbar').removeClass('navbar-inverse');
    }

});


$(window).resize(function(){
    //var windowWidth = $(window).width();
   if($(window).width() < 760 ){
    $('.navbar').addClass('navbar-inverse');
    }
   //else if(($(window).width() < 760 ) && ($(window).scrollTop > 600)){
   //   $('.navbar').addClass('navbar-inverse');
   //}
    else{
        $('.navbar').removeClass('navbar-inverse');
   }

});

//var eventFired = 0;
//
//if ($(window).width() < 760) {
//     $('.navbar').addClass('navbar-inverse');
//
//}
//else {
//    $('.navbar').removeClass('navbar-inverse');
//    eventFired = 1;
//}
//
//$(window).on('resize', function() {
//    if (!eventFired) {
//        if ($(window).width() < 760) {
//            $('.navbar').addClass('navbar-inverse');
//        } else {
//            $('.navbar').removeClass('navbar-inverse');
//        }
//    }
//});

//$(document).ready(function() {
//    // Optimalisation: Store the references outside the event handler:
//    var $window = $(window);
//    var $pane = $('#pane1');
//
//    function checkWidth() {
//        var windowsize = $window.width();
//        if (windowsize < 760) {
//            //if the window is greater than 440px wide then turn on jScrollPane..
//            $('.navbar').addClass('navbar-inverse');
//    } else {
//        $('.navbar').removeClass('navbar-inverse');
//            }
//
//    }
//    // Execute on load
//    checkWidth();
//    // Bind event listener
//    $(window).resize(checkWidth);
//});




      $(window).scroll(function(){
          var wScroll = $(this).scrollTop();
          $('#topImg').css({
              'transform': 'translate(0px,'+wScroll/12 +'%)'
          });
          if (wScroll > $('#wContainer').offset().top - height/2) {
              $('.figure').each(function (i) {
                  setTimeout(function () {
                      $('.figure').eq(i).addClass('isShowing');
                  }, 150 * (i + 1));

              });
          }
               if (wScroll > $('#bottomContainer').offset().top - 400) {
                   //console.log('hi');
                   $('.figure1').each(function (i) {
                       setTimeout(function () {
                           $('.figure1').eq(i).addClass('isShowing1');
                           $('.figure2').eq(i).addClass('isShowing1');
                       }, 150 * (i + 1));

                   });
               }

           if(wScroll > 600) {
        $('.fadingAppearance').fadeOut("slow");
    } else {
        $('.fadingAppearance').fadeIn("slow");
    }
      });

   $(".navbar-nav li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

