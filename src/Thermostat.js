'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_PSMOFF = 32;
  this.MAXIMUM_TEMPERATURE_PSMON = 25;
  this.powerSavingMode = true
}

Thermostat.prototype.getTemperature = function(){
  return this.temperature
}

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()){
    return;
  }
  this.temperature++
}

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()){
    return;
  }
  this.temperature--
}

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingModeOn() === false){
  return this.temperature === this.MAXIMUM_TEMPERATURE_PSMOFF;
}
return this.temperature === this.MAXIMUM_TEMPERATURE_PSMON;
}

Thermostat.prototype.isMinimumTemperature = function(){

  return this.temperature === this.MINIMUM_TEMPERATURE;

}

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function(){
  return this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.reset = function(){
  return this.temperature = 20
}

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < 18){
    return 'low-usage';
  }
  if(this.temperature >= 18 && this.temperature <= 25){
    return 'medium-usage';
  }
  return 'high-usage';
}
