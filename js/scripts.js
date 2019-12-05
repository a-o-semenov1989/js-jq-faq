$(function() {

	$('.faq .question').on('click', function(){
    var answer = $(this).next();
        
    $('.faq .answer:visible').not(answer).slideUp(400);
    answer.slideToggle(400);
  });
})