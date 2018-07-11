describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("starts at 20 degrees", function(){
    expect(thermostat.getTemperature()).toEqual(20);
  })

  it("increases temperature with up function", function(){
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  })
})
