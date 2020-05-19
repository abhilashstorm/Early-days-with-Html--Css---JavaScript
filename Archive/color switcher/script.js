 $(document).ready(function () {
	
	$('span').click(function () {
		
		$('.colors, span').toggleClass('active');
		
	});
	
	
	$('ul.themes-colors li').click(function () {
		
		$('body').css('background', $(this).css('color'));
		
	});
	
	$('ul.text-colors li').click(function () {
		
		$('h3, h1').css('color', $(this).css('color'));
		
	});
	
	
});
