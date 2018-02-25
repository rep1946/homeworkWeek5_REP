console.log("I'm ready!");

$(document).ready(function(){
	$('p.readmore').click(function(){
		$('.hide').slideDown();
		$('.readmore').hide();

	});

	$('p.readless.hide').click(function(){
		$('.hide').slideUp();
		$('.readmore').show();


	});


	$('.learnmore').click(function(){
		$('span.hide').slideDown();
		$('.learnmore').hide();
	});


});





console.log('bacon!')
