/*jslint browser: true*/
/*global $, jQuery, alert*/
$(".nav").localScroll({duration: 800});

 $(function() {
       $('a[href*="#"]:not([href="#"])').click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
               scrollTop: target.offset().top
             }, 1000);
             return false;
           }
         }
       });
     });

$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 600) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-fixed-top").css("background-color", "#ededed"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-fixed-top").css("background-color", "#ffffff"); // if not, change it back to transparent
        }
      });
    });

$(window).resize(function() {
  // This will execute whenever the window is resized
    var initialWidth = screen.width;
    var width = $(window).width(); // New width
    if (width<525 || initialWidth<525){
        
}else{
    
}
});