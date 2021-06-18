$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
     return false;
   });
 });


 $(document).ready(function(){
   $("#devImg").click(function(){
     $("#devImg").slideDown('500').hide('500');
     $("#dev").show('500');
   });
   $("#dev").click(function(){
     $("#dev").slideUp('500');
     $("#devImg").slideDown('500');
   });
 });

 $(document).ready(function(){
   $("#designImg").click(function(){
     $("#designImg").slideDown('500').hide('500');
     $("#design").show('500');
   });
   $("#design").click(function(){
     $("#design").slideUp('500');
     $("#designImg").slideDown('500');
   });
 });

 $(document).ready(function(){
   $("#productImg").click(function(){
     $("#productImg").slideDown('500').hide('500');
     $("#product").show('500');
   });
   $("#product").click(function(){
     $("#product").slideUp('500');
     $("#productImg").slideDown('500');
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
