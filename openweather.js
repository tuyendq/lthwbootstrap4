$(document).ready(function() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=London,England";
    var apiKey = "64845548b398f0d3c3565d011b75756a";
    var httpRequest;
    makeRequest();
    
    // create and send xhr req
    function makeRequest(){
      httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = responseMethod;
      httpRequest.open('GET', url + '&appid=' + apiKey);
      httpRequest.send();
    }

    // handle XHR response
    function responseMethod(){
      if (httpRequest.readyState === 4){
        //console.log(httpRequest.responseText);
        
        updateUISuccess(httpRequest.responseText);
      }
    }

    // parse response
    function updateUISuccess(responseText){
        var response;
        response = JSON.parse(responseText);
        console.log(response.weather[0].main);
        console.log(response.main.temp);

        var openWeather = document.getElementById('openweather');
        openWeather.innerHTML = "<span>Weather condition: " + response.weather[0].main + " / Temperature: " + response.main.temp + "</span>" ;
    }

    function updateUIError(){
      var openWeather = document.getElementById('openweather');
      openWeather.innerHTML = "";
    }

  });