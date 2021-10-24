$(function() {  
      $('#up').click(function() {  
        $('body,html').animate({scrollTop:0},100);  
        return false;  
      })        
 })  

 window.addEventListener('scroll', function() {
	var element = document.querySelector('.second-screen');
	var position = element.getBoundingClientRect();
	if(position.bottom >= position.height) {
		$('.goTopBtn').css('opacity', '0');
	} else{
        $('.goTopBtn').css('opacity', '1');
    }
});