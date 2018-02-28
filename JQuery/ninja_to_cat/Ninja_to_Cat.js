$(document).ready(function() {
	$("img").click(function(event) {
		var placeholder = $(this).attr('data_alt_src');
		$(this).attr('data_alt_src', $(this).attr('src'));
		$(this).attr('src', placeholder);
		
	});
});