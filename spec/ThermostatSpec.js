'use strict';

describe ('Thermostat:', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at twenty degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('temperature can be increased with up button',function(){
    thermostat.increaseTemperature();
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(22);
  });

  it('temperature can be decreased with down button',function(){
    thermostat.decreaseTemperature();
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(18);
  });

  it('will not allow the temperatue to drop below 10 degrees', function(){
    do { thermostat.decreaseTemperature(); }
    while (thermostat.temperature >= 10);
    expect(function(){thermostat.decreaseTemperature()}).toThrowError("Temperature cannot drop below 10 degrees");
  });

  it('is limited to 25 deg if powersaving mode is on', function(){
    thermostat.turnOnPowerSavingMode();
    for (var i = 0; i < 5; i++) {
      thermostat.increaseTemperature();
    }

    expect(function(){thermostat.increaseTemperature()}).toThrowError("Max temp exceeded");
  });

  it('turns power saving mode off', function() {
    thermostat.turnOffPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  });

  it('is limited to 32 deg if power saving mode is off', function() {
    thermostat.turnOffPowerSavingMode();
    for (var i = 0; i < 12; i++) {
      thermostat.increaseTemperature();
    }
    expect( function() {thermostat.increaseTemperature()}).toThrowError("Max temp exceeded")
  });

  it('resets the temperature to 20 degrees when the reset button is used', function(){
    for (var i = 0; i < 5; i++) {
      thermostat.increaseTemperature();
    }
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('displays a green thermostat if the temperature is less than 18 degrees', function(){
    for (var i = 0; i <= 2; i++) {
      console.log(thermostat.temperature)
      thermostat.decreaseTemperature()
    }
    console.log(thermostat.temperature)
    expect(thermostat.colour).toEqual("green");
  });

  it('displays a yellow thermostat if the temperature is less than 25 but greater than 18', function() {
    expect(thermostat.colour).toEqual('yellow')
  });

  it('displays a red thermostat if the temeperature is 25 or greater', function() {
    for (var i = 0; i < 5; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.colour).toEqual('red');
  });

});
