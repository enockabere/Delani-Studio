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
 //contact us

 $(document).ready(function(){
   $("form#fom").submit(function(event){
     var name =$("input#jina").val();
     var mail =$("input#email").val();
     var message =$("textarea#comment").val();
     if ($("input#jina").val() && $("input#email").val()) {
       alert(name + ", We have recieved your message. Thank you for reaching out to us.");
     }else {
       alert("Enter your name and email again!!");
     }
   });
 });
})
