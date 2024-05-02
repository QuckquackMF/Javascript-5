function fetchCurrentWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=fa7d90539f9c358ed9f6063d051af90d&units=metric')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var feelsLikeValue = data['main']['feels_like'];
            var pressureValue = data['main']['pressure'];
            var humidityValue = data['main']['humidity'];
            var dewPointValue = data['main']['dew_point'];
            var uviValue = data['uvi'];
            var cloudsValue = data['clouds']['all'];
            var visibilityValue = data['visibility'];
            var windSpeedValue = data['wind']['speed'];
            var windDegValue = data['wind']['deg'];
            var windGustValue = data['wind']['gust'];
            var sunriseTime = new Date(data['sys']['sunrise'] * 1000).toLocaleTimeString();
            var sunsetTime = new Date(data['sys']['sunset'] * 1000).toLocaleTimeString();

            $('#name').text(nameValue);
            $('.temp').text("Temperatura: " + tempValue + "°C");
            $('.feels-like').text("Feels like: " + feelsLikeValue + "°C");
            $('.pressure').text("Pressure: " + pressureValue + "hPa");
            $('.humidity').text("Humidity: " + humidityValue + "%");
            $('.dew-point').text("Dew Point: " + dewPointValue + "°C");
            $('.uvi').text("UV Index: " + uviValue);
            $('.clouds').text("Clouds: " + cloudsValue + "%");
            $('.visibility').text("Visibility: " + visibilityValue + "m");
            $('.wind-speed').text("Wind Speed: " + windSpeedValue + "m/s");
            $('.wind-deg').text("Wind Degree: " + windDegValue + "°");
            $('.wind-gust').text("Wind Gust: " + windGustValue + "m/s");
            $('.sunrise').text("Sunrise: " + sunriseTime);
            $('.sunset').text("Sunset: " + sunsetTime);

            $('#cityInput').val('');
            $('#currentWeatherBtn').click();
        })
        .catch(err => alert("Città inesistente"));
}

function fetchHourlyForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=fa7d90539f9c358ed9f6063d051af90d&units=metric')
        .then(response => response.json())
        .then(data => {
            $('#hourlyForecastTable').empty();
            data.list.forEach(entry => {
                var time = new Date(entry.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                var temp = entry.main.temp;
                $('#hourlyForecastTable').append('<tr><td>' + time + '</td><td>' + temp + '°C</td></tr>');
            });
        })
        .catch(err => alert("Hourly forecast not available"));
}

function fetchDailyForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=16&appid=fa7d90539f9c358ed9f6063d051af90d&units=metric')
        .then(response => response.json())
        .then(data => {
            $('#dailyForecastTable').empty();
            data.list.forEach(entry => {
                var date = new Date(entry.dt * 1000).toLocaleDateString();
                var temp = entry.temp.day;
                var description = entry.weather[0].description;
                $('#dailyForecastTable').append('<tr><td>' + date + '</td><td>' + temp + '°C</td><td>' + description + '</td></tr>');
            });
        })
        .catch(err => alert("Daily forecast not available"));
}