'use strict';

function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.getTemperature = function(){
  return this.temperature
}

Thermostat.prototype.up = function(){
  this.temperature++
}

Thermostat.prototype.down = function(){
  this.temperature--
}
