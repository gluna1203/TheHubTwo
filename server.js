// const express = require('express');
// const pug = require('pug');
// const path = require('path');
// const routes = require('./routes/routes.js');
// const port = process.env.PORT || 3001;

// const app = express();

// app.set('view engine', 'pug');
// app.set('views', __dirname + "/views");
// app.use(express.static(path.join(__dirname, '/public')));

$(function () {
    var apikey = '0658a8fe82c53e670195aebff0c9c3e6';
    var city = "Salt Lake City, UT, US";
    var url = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + city + "&appid=" + apikey;

    $.getJSON(url, function (data) {
        console.log(data);
        showWeather1(data, 0);
        showWeather2(data, 8);
        showWeather3(data, 16);
        showWeather4(data, 24);
        showWeather5(data, 32);
    })
})
function showWeather1(data, day) {
    //id ="day0temp"
    $('#day' + day + 'temp').html("Temp:" + data.list[day].main.temp);
    $('#day' + day + 'description').html(data.list[day].weather[0].description);
    $('#day' + day + 'dayandtime').html("Date: " + data.list[day].dt_txt);
    var icon = 'http://openweathermap.org/img/wn/13n.png';
    $('#day' + day + 'icon').html('<img src="' + icon + '" width="90%" />');


}
function showWeather2(data, day) {
    //id ="day0temp"
    $('#day' + day + 'temp').html("Temp:" + data.list[day].main.temp);
    $('#day' + day + 'description').html(data.list[day].weather[0].description);
    $('#day' + day + 'dayandtime').html(data.list[day].dt_txt);
    var icon = 'http://openweathermap.org/img/wn/01d.png';
    $('#day' + day + 'icon').html('<img src="' + icon + '" width="90%" />');


}
function showWeather3(data, day) {
    //id ="day0temp"
    $('#day' + day + 'temp').html("Temp:" + data.list[day].main.temp);
    $('#day' + day + 'description').html(data.list[day].weather[0].description);
    $('#day' + day + 'dayandtime').html(data.list[day].dt_txt);
    var icon = 'http://openweathermap.org/img/wn/10d@2x.png';
    $('#day' + day + 'icon').html('<img src="' + icon + '" width="90%" />');


} function showWeather4(data, day) {
    //id ="day0temp"
    $('#day' + day + 'temp').html("Temp:" + data.list[day].main.temp);
    $('#day' + day + 'description').html(data.list[day].weather[0].description);
    $('#day' + day + 'dayandtime').html(data.list[day].dt_txt);
    var icon = 'http://openweathermap.org/img/wn/04d.png';
    $('#day' + day + 'icon').html('<img src="' + icon + '" width="90%" />');


}
function showWeather5(data, day) {
    //id ="day0temp"
    $('#day' + day + 'temp').html("Temp:" + data.list[day].main.temp);
    $('#day' + day + 'description').html(data.list[day].weather[0].description);
    $('#day' + day + 'dayandtime').html("Date" + data.list[day].dt_txt);
    var icon = 'http://openweathermap.org/img/wn/04d.png';
    $('#day' + day + 'icon').html('<img src="' + icon + '"  width="90%" />');


}
function displayWeeklyWeather() {
    document.getElementById("button1").style.opacity = "0";
    document.getElementById("left-column").style.opacity = "1";
    document.getElementById("right-column").style.opacity = "1";
    document.getElementById("left-column").style.width = "50%";
    document.getElementById("right-column").style.width = "50%";
    document.getElementById("content").style.display = "block";
    document.getElementById("info-txt").classList.add("show");
    document.getElementById("content2").classList.add("show");
    document.getElementById("content2").style.height = "35vw";
    document.getElementById("weatherBox").style.width = "50.3%";
}

