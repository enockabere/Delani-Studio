$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('section.about').offset().top }, 'slow');
     return false;
   });
 });


 $(document).ready(function(){
   $("#devImg").click(function(){
     $("#devImg").toggle('500').hide('500');
     $("#dev").show('500');
   });
   $("#dev").click(function(){
     $("#dev").toggle('500');
     $("#devImg").toggle('500');
   });
 });

 $(document).ready(function(){
   $("#designImg").click(function(){
     $("#designImg").toggle().hide('');
     $("#design").show('500');
   });
   $("#design").click(function(){
     $("#design").toggle('500');
     $("#designImg").toggle('500');
   });
 });

 $(document).ready(function(){
   $("#productImg").click(function(){
     $("#productImg").toggle('500').hide('500');
     $("#product").show('500');
   });
   $("#product").click(function(){
     $("#product").toggle('500');
     $("#productImg").toggle('500');
   });
 });

 $(document).ready(function(){
   $("#pic").mouse(function(){
     $("#overlay").css({"background-color": "green", "transition": ".5s ease",
     "position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0",
     "height": "100%", "width": "100%", "opacity": "0"});
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

//portfolio overlay
$(document).ready(function(){
  $("#image").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
