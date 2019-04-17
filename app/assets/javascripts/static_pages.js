$(document).ready(function() {
  var $currentTemp = $("#current-temp");
  var $feelsLikeTemp = $("#feels-like-temp");


  navigator.geolocation.getCurrentPosition(
    function(position) {
      console.log(position);
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      $.ajax({
        url: "/get_forecast",
        type: "get",
        dataType: "json",
        data: {latitude: latitude, longitude: longitude},
        success: function(response) {
          console.log(response.forecast.body.currently);
          $feelsLikeTemp.html(response.forecast.body.currently.apparentTemperature);
          $currentTemp.html(response.forecast.body.currently.temperature);
        },
        error: function(response) {
          console.log(response);
        }
      });
    },

    function() {
      console.log("Timed out!");
    },
    
    {timeout: 2000}
  );
});