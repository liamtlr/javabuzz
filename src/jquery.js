$( document ).ready(function() {
	thermostat = new Thermostat;
	$('#temperature_display').text(thermostat.getCurrentTemperature());
		update();
		gettingJSON();
});

$('#reset_button').click(function() {
	thermostat.reset();
});

$('#increase_temperature_button').click(function() {
	thermostat.increaseTemperature();
	update();
});

$('#decrease_temperature').click(function(){
	thermostat.decreaseTemperature();
	update();
});

$('#turn_on_power_saving').click(function(){
	thermostat.turnOnPowerSavingMode();
	update();
});

$('#turn_off_power_saving').click(function(){
	thermostat.turnOffPowerSavingMode();
	update();
});

function update() {
	$('#temperature_display').text(thermostat.getCurrentTemperature());
	$('#thermostat').css("background-color",thermostat.colour);
	displayPowerSavingStatus();
}

function displayPowerSavingStatus() {
		if (thermostat.isPowerSavingModeOn() === true) {
			$('#powersaving_display').text("on");
		} else {
			$('#powersaving_display').text("off");
		}
	};

function gettingJSON(){
		if ($('#location_input') === false) {
			city = "london";	
		} else {
			city = $('#location_input').text();
		}
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=d631f9336b0f36782ae2b6e3d513d46e&units=metric", function(data) {$('#weather_display').text(data.name+' - '+ data.main.temp + 'C - ' +data.weather[0].description);
  });
}

$('#change_location_button').click(gettingJSON());






