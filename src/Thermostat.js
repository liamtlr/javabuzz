'use strict';

function Thermostat(){
  this.temperature = 20;
  this.powerSavingMode = true;
  this.maxTemperature = 25;
  this.colour = 'yellow';
  // MAX_TEMPERATURE_WITH_POWER_SAVING_MODE_ON = 25;
  // MAX_TEMPERATURE_WITH_POWER_SAVING_MODE_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(){
    if (this.temperature < this.maxTemperature) {     // && this.powerSavingMode == true) {
      this.temperature += 1;
    } else {
      throw new Error("Max temp exceeded");
    }
    this.setThermostatColour();
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temperature > 10){
   this.temperature -= 1;
  } else {
    throw new Error("Temperature cannot drop below 10 degrees");
  }
  this.setThermostatColour();
};

Thermostat.prototype.turnOnPowerSavingMode = function(){
  this.powerSavingMode = true;
  this.maxTemperature = 25;      //MAX_TEMPERATURE_WITH_POWER_SAVING_MODE_ON;
};

Thermostat.prototype.turnOffPowerSavingMode = function() {
  this.powerSavingMode = false;
  this.maxTemperature = 32;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.setThermostatColour = function() {
  if (this.temperature < 18) {
    this.colour = "green"
  } else if (this.temperature >= 18 && this.temperature < 25){
    this.colour = "yellow"
  } else {
    this.colour = "red"
  }
};

// button.addEventListener("click", setThermostatColour())

