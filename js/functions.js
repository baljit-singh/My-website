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
    else {
        $('.navbar').removeClass('navbar-inverse');

    }

});


$(window).resize(function(){
   if(($(window).width() < 760 )&&($(window).scrollTop() < 600)){
    $('.navbar').addClass('navbar-inverse');
    }
    else{
        $('.navbar').removeClass('navbar-inverse');
   }

});


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

