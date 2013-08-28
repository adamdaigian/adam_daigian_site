$('document').ready(function() {
  $('#toggle').click(function() {
    $('.container').effect("shake");
    console.log("hello");
  });


  $('.s1').hover(function() {
    $('.s1').tooltip();
  });
 
}); 