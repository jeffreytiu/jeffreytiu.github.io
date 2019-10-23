$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 250, function(){
        window.location.hash = hash;
      });
    } 
  });
});
$(function () {
    $(document).scroll(function(){
        var $nav = $("#mainNavBar");
        $nav.toggleClass("fixed-top scrolled", $(this).scrollTop() > $nav.height());
    })
})