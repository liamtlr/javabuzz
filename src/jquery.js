$( document ).ready(function() {
	thermostat = new Thermostat;
});

$('#reset_button').click(function() {
	thermostat.reset();
});

$('#increase_temperature_button').click(function() {
	thermostat.increaseTemperature();
}); 