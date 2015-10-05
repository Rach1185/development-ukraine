$( document ).ready(function() {
    console.log( "Checking JavaScript! Ready!" );
});

$(".heart").hover(function () {
    $(this).toggleClass("animated bounceOut infinite");
 });

/*$("#heart-trigger").click(function () {
    $(".navlink").slideToggle ("fast" );
 });*/

$("#heart-trigger").click(function () {
    $(".navlink").toggleClass("visible");
 });
