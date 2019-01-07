
function getData() {
	var responseObject;
	var xhr = new XMLHttpRequest();

	xhr.onload = function() {
		if (xhr.status === 200) {
			responseObject = JSON.parse(xhr.responseText);
			var el = document.getElementById("weatherDate");
			el.innerHTML = responseObject.time;
			var el = document.getElementById("weatherTemperature");
                	el.innerHTML = Math.round(responseObject.temperature)  +'&degF';
			var el = document.getElementById("weatherHigh");
                	el.innerHTML = Math.round(responseObject.hi_temp)+'&degF';
			var el = document.getElementById("weatherLow");
               	 	el.innerHTML = Math.round(responseObject.lo_temp)+'&degF';
			var el = document.getElementById("weatherHumidity");
                	el.innerHTML = Math.round(responseObject.humidity) +'&degF';
			var el = document.getElementById("weatherRain");
                	el.innerHTML = responseObject.rain_today;
			var el = document.getElementById("weatherWindspeed");
                	el.innerHTML = responseObject.wind_speed;
			var el = document.getElementById("weatherRefresh");
			el.onclick = getData;
		}
		
	};
	

	xhr.open('GET', 'http://student2.cs.appstate.edu/crr/3440/OtherExamples/BooneCurrentConditionsJSON.php',true);
	xhr.send(null);	
	
}
getData();

