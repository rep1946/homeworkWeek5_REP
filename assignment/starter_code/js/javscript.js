/*---Load DOM on ready
Show more info on click----*/


$(document).ready(function(){
	$('p.readmore').click(function(){
		$('.hide').slideDown();

	});


});


$(document).ready(function(){

	$('p.readless.hide').click(function(){
		$('.hide').slideUp();


	});
});



console.log('bacon!')