$(document).ready(function() {

    var thermostat = new Thermostat();

    function updateTemperature(){
      $('#temperature').text(thermostat.temperature);
      $('body').attr('class', thermostat.displayColour());
    }


   function showPSM(){
     $('#power-saving-status').text(thermostat.powerSaveStatus());
   }

    updateTemperature();
    showPSM();


    $('#temperature-up').click(function() {
     thermostat.pushUpButton();
     updateTemperature();
    });

    $('#temperature-down').click(function() {
     thermostat.pushDownButton();
     updateTemperature();
    });

    $('#temperature-reset').click(function(){
      thermostat.resetTemperature();
      updateTemperature();
    });

    $('#powersaving-on-off').click(function(){
      thermostat.togglePowerSave();
      updateTemperature();
      showPSM();
    });

    function displayWeather(city) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
      var units = '&units=metric';
      $.get(url + token + units, function(data) {
        $('#current-temperature').text(data.main.temp);
      });
    }

    displayWeather('London');

    $('#current-city').change(function() {
      var city = $('#current-city').val();
      displayWeather(city);
    });

});
