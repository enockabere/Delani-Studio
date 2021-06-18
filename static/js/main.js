$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
     return false;
   });
 });

// navigation bar
window.onscroll =function () {stickTop()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickTop(){
  if (window.pageYOffset >=sticky){
    navbar.classlist.add("sticky")
  }else {
    navbar.classlist.remove ("sticky")
  }
}
