$(document).ready(function() {

  $(".heart").hover(function() {
      $(this).toggleClass("animated bounceOut infinite");
   });

  $("#heart-trigger").click(function() {
      $(".navlink").toggleClass("visible");
   });
