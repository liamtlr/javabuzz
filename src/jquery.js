$( document ).ready(function() {
	thermostat = new Thermostat;
	$('#temperature_display').text(thermostat.getCurrentTemperature());
});

$('#reset_button').click(function() {
	thermostat.reset();
});

$('#increase_temperature_button').click(function() {
	thermostat.increaseTemperature();
	$('#temperature_display').text(thermostat.getCurrentTemperature());

});

$('#decrease_temperature').click(function(){
	thermostat.decreaseTemperature();
	$('#temperature_display').text(thermostat.getCurrentTemperature());
});

$('#turn_on_power_saving').click(function(){
	thermostat.turnOnPowerSavingMode();
});

$('#turn_off_power_saving').click(function(){
	thermostat.turnOffPowerSavingMode();
});

$('button').click(function(){
	console.log(this)
})
