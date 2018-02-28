$(document).ready(function() {
	// alert("Get a Ocelot today")
	$('.addUser h2').after('<br>')
	$('.addUser input').after('<br>')

	$('form').submit(function(event) {
		$('.tablePeople table').append('<tr>' +
			'<td>'+ $('.first_name').val()+'</td>' +
			'<td>'+ $('.last_name').val()+'</td>' +
			'<td>'+ $('.Email_Address').val()+'</td>' +
			'<td>'+ $('.Phone_Number').val()+'</td>' +
			'</tr>')
		


		return false		
	});
});