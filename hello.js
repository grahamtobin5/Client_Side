$(document).ready(function() {
	$('h1').html("It is time to learn about JQuery.");
	$('h1').remove();
	$('body').append("<h1>Look Mom, No Hands!</h1>");
	$('h1').css({ 'color': 'white', 'background-color': 'dodgerblue', 'border': 'solid 10px rgb(0,51,102)', 'padding':'0px 75px 75px 0px', 'margin': '2px 900px 0px 2px'});
	var border = $('h1').css('border');
	$('body').append("</p><b>The border property is:</b> " +border + "</p>");
	
});


