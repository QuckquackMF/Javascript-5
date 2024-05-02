$(document).ready(function () {
    $('#hourlyForecast, #dailyForecast').hide();

    $('.weather-link').click(function() {
        var target = $(this).data('target');
        $('#' + target).show().siblings('.container').hide();
    });

    $('#dailyForecastForm').submit(function (event) {
        event.preventDefault();
        var inputCity = $('#dailyCityInput').val();
        fetchDailyForecast(inputCity);
        $('#dailyForecastBtn').prop('disabled', true);
    });

    $('#submitButton').click(function () {
        var inputCity = $('#cityInput').val();
        fetchCurrentWeather(inputCity);
    });

    $('#hourlyForecastForm').submit(function (event) {
        event.preventDefault();
        var inputCity = $('#hourlyCityInput').val();
        fetchHourlyForecast(inputCity);
    });
});