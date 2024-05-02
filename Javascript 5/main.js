$(document).ready(function () {
    $('#submitButton').click(function () {
        var inputCity = $('#cityInput').val();
        fetchCurrentWeather(inputCity);
    });
});