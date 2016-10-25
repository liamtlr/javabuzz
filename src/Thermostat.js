'use strict';

function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(){
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temperature >= 10){
   this.temperature -= 1;
  } else {
    throw new Error("Temperature cannot drop below 10 degrees");
  }
};
