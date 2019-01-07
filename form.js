$(function() {
	


	$('#station').on('change',function(e) {
		
		e.preventDefault();
		var details = $('#station').serialize();
		$.get('http://student2.cs.appstate.edu/crr/3440/OtherExamples/RWCCurrentConditions.php?station=n', details, function(data) {
		var time = data.getElementsByTagName('time');
		$('#weatherDate').html(time);
		var temp = data.getElementsByTagName('temperature')[0].childNodes[0].nodeValue;	
		$('#weatherTemperature').html(Math.round(temp) +'&degF');
                var hi = data.getElementsByTagName('hi_temp')[0].childNodes[0].nodeValue;
                $('#weatherHigh').html(Math.round(hi) + '&degF');
                var lo = data.getElementsByTagName('lo_temp')[0].childNodes[0].nodeValue;
		$('#weatherLow').html(Math.round(lo) + '&degF');
                var hum = data.getElementsByTagName('humidity')[0].childNodes[0].nodeValue;
                $('#weatherHumidity').html(Math.round(hum) + '&degF');
		var rain = data.getElementsByTagName('rain_today');
                $('#weatherRain').html(rain);
		var wind = data.getElementsByTagName('wind_speed');
                $('#weatherWindspeed').html(wind);
                                        
	
		});
	
	});


		var details =  $('#station').serialize();
                $.get('http://student2.cs.appstate.edu/crr/3440/OtherExamples/RWCCurrentConditions.php?station=n', details, function(data) {
                var time = data.getElementsByTagName('time');
                $('#weatherDate').html(time);
                var temp = data.getElementsByTagName('temperature')[0].childNodes[0].nodeValue;
                $('#weatherTemperature').html(Math.round(temp) +'&degF');
                var hi = data.getElementsByTagName('hi_temp')[0].childNodes[0].nodeValue;
                $('#weatherHigh').html(Math.round(hi) + '&degF');
                var lo = data.getElementsByTagName('lo_temp')[0].childNodes[0].nodeValue;
                $('#weatherLow').html(Math.round(lo) + '&degF');
                var hum = data.getElementsByTagName('humidity')[0].childNodes[0].nodeValue;
                $('#weatherHumidity').html(Math.round(hum) + '&degF');
                var rain = data.getElementsByTagName('rain_today');
                $('#weatherRain').html(rain);
                var wind = data.getElementsByTagName('wind_speed');
                $('#weatherWindspeed').html(wind);
	});
});
