var dt = new Date();
var options = { weekday: 'long' , year: 'numeric', month: 'long', day: 'numeric' };
// document.getElementById("date").innerHTML = (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2)) +"  "+dt.toLocaleDateString("en-US", options) 


window.onload = function() {
    getWeatherSyd();
    getWeatherNYC();
    getWeatherLon();
  }

function getWeatherSyd() {
    // JP API Key - note limited calls on free tier
    var cityID = 2147714;
    var key = '2ab66dc6062e2306ad47f0bd57eb10f0';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
      drawWeatherSyd(data);
    })
    .catch(function() {
      // catch any errors
    });
  }

  function getWeatherLon() {
    // JP API Key - note limited calls on free tier
    var cityID = 2643741;
    var key = '2ab66dc6062e2306ad47f0bd57eb10f0';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
      drawWeatherLon(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  

  function getWeatherNYC() {
    var cityID = 5128581;
    var key = '2ab66dc6062e2306ad47f0bd57eb10f0';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
      drawWeatherNYC(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
     
  function drawWeatherSyd( d ) {
      var celcius = Math.round(parseFloat(d.main.temp)-273.15);
      var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
      document.getElementById('tempSYD').innerHTML = celcius + '&deg;';
      var iconCode = d.weather[0].icon   
      var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
      document.getElementById('weatherIconSYD').src = iconURL
    }

    function drawWeatherLon (d ) {
        var celcius = Math.round(parseFloat(d.main.temp)-273.15);
        var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
        document.getElementById('tempLon').innerHTML = celcius + '&deg;';
        var iconCode = d.weather[0].icon   
        var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
        document.getElementById('weatherIconLon').src = iconURL
      }

    function drawWeatherNYC (d ) {
        var celcius = Math.round(parseFloat(d.main.temp)-273.15);
        var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
        document.getElementById('tempNYC').innerHTML = celcius + '&deg;';
        var iconCode = d.weather[0].icon   
        var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
        document.getElementById('weatherIconNYC').src = iconURL
      }