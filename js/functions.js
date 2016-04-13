/**
 * Created by home on 4/13/2016.
 */
/**
 * Created by home on 4/10/2016.
 */
/**
 * Created by home on 4/10/2016.
 */

      var height= $(window).height();
       $(".contentContainer").css("min-height",height);
//       $(".parallax-container").css("min-height",height);
         $("#topImg").css("min-height",height);

     $(window).scroll(function() {
    if($(this).scrollTop() > 600) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
});

       $(window).scroll(function() {
    if($(this).scrollTop() > 200) {
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
