$(document).ready(function(){

  forecast = $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(weather){
    $("#temperatureOutside").append(weather.weather[0].description)
    console.log(weather);
  });






});
