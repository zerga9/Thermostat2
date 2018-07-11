describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("starts at 20 degrees", function(){
    expect(thermostat.getTemperature()).toEqual(20);
  })

  it("increases temperature with up()", function(){
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  })

  it("decreases temperature with down()", function(){
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  })

  it("has maximum temperature of 25", function(){
    for (var i = 0; i < 6; i++) {
    thermostat.up();
  }
  expect(thermostat.getTemperature()).toEqual(25);
});

it("has mimimum temperature of 10", function(){
  for (var i = 0; i < 6; i++) {
  thermostat.up();
}
expect(thermostat.getTemperature()).toEqual(25);
});

it('has a minimum of 10 degrees', function() {
  for (var i = 0; i < 11; i++) {
    thermostat.down();
  }
  expect(thermostat.getTemperature()).toEqual(10);
});

it('has power saving mode on by default', function() {
  expect(thermostat.isPowerSavingModeOn()).toBe(true);
});

it('can switch power save mode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can reset temperature to 20', function() {
    thermostat.up()
    thermostat.reset()
      expect(thermostat.getTemperature()).toEqual(20);
    });

    it('when the temperature is below 18 degrees, it is low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('when temp between 18 and 25 is considered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });


    it('it is considered high-usage when it is over 25', function() {
      thermostat.powerSavingMode = false;
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });






})
