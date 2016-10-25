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
    expect(function (){thermostat.decreaseTemperature()}).toThrowError("Temperature cannot drop below 10 degrees");

  });

});
