$(document).ready(function(){
  $(window).scroll(function(){
    var position = $(this).scrollTop();
    if(position >= 100) {
      $('.navbar-expand-md').addClass('custom-navbar');
    } else {
      $('.navbar-expand-md').removeClass('custom-navbar');
    }
  });
  
  $("img.lazyload").lazyload({
    effect : "fadeIn",
    effectTime: 2000
  });
});