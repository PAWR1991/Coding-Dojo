$(document).ready(function() {
	// alert('It works')
	$('form').submit(function(event) {
		$('.cardInfo').append('<div class=infobox>'+
		'<h3>'+ $('.first_name').val() +' '+ $('.last_name').val()+'</h3>' +
		'<h5> Click to see the description</h5>'+
		'<p>'+ $('.description').val() +'</p>')

		$('p').hide()

		return false
	});

	$(document).on('click','.infobox', function(){
		$(this).children().toggle()
		// $(this, 'h5').hide()
		// $(this, 'p').show()
	});
	// $(document).on('click','.infobox p', function(){
	// 	$(this).hide()
	// 	$('.infobox h3').show()
	// 	$('.infobox h5').show()
	// });
		


});