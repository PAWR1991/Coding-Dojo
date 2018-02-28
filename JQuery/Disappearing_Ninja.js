$(document).ready(function() {

	// alert("it lives");

	$('img').click(function(event) {
		$(this).hide();
	});

	$('button').click(function(event) {
		/* Act on the event */
		$('img').show();
	});
});