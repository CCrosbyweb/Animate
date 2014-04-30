// My Scripts
$(document).foundation();
//animate.css stuff

$('h3').click(function(){
	
	$('h3').addClass('animated rubberBand');
	console.log('click me')
});

//transit.js stuff
$('img').click(function(){
	
	//Do Stuff
	$("p").transition({
		x: 100, 
		y: 100,
	});

});