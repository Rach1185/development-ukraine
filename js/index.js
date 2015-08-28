
$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("aside nav li").velocity("transition.slideOut");

    $("aside nav").velocity({
      translateX: ["0%", "-100%"],
    }, {
      easing: [400, 50],
      duration: 300
    });
    $(".overlay").velocity({
      opacity: [0, 1]
    }, {
      display: 'block'
    });
  });

  $(".overlay").click(function() {
    $("aside nav").velocity({
      translateX: ["-100%", "0%"],
    }, {
      easing: [400, 50],
      duration: 500,
    });


    $(".overlay").velocity({
      opacity: [0, 1]
    }, {
      display: 'none'
    });

  });

});
