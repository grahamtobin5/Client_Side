function updateConditions(data) {
	$(function() {
		function getData() {
			$.ajax ({ type:"GET", url: "http://student2.cs.appstate.edu/crr/3440/OtherExamples/BooneCurrentConditionsJSONP.php",
			jsonp:"callback",
			dataType: 'jsonp', 
			success: function (data) {
                        	$.each(data, function(key,val) {
                                	if (key == "time") {
                                        	$('#weatherDate').html(val);
                                	}
                                	if (key == "temperature")
                                	{
                                        	$('#weatherTemperature').html(Math.round(val) +'&degF');
                                	}
                                	if (key == "hi_temp")
                                	{
                                        	$('#weatherHigh').html(Math.round(val) + '&degF');
                                	}
                                	if (key == "lo_temp")
                                	{
                                        	$('#weatherLow').html(Math.round(val) + '&degF');
                                	}
                                	if (key == "humidity")
                                	{
                                       		$('#weatherHumidity').html(Math.round(val) + '&degF');
                                	}
                                	if (key == "rain_today")
                                	{
                                        	$('#weatherRain').html(val);
                               	 	}
                                	if (key == "wind_speed")
                                	{
                                        	$('#weatherWindspeed').html(val);
                                	}

                        	});
		    	}
			});
	
		}
		getData();
        	var el = document.getElementById('weatherRefresh');
        	el.onclick = getData(); 
	


	}); 
}
