const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'ff56f5b8f3fe2945c1021c146c9847bf';
let city = argv.c || 'Palakkad';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function(error, response, body) {
    if(error) {
        console.log('error', error);
    } else {
        let weather = JSON.parse(body);
        let message = `Its ${weather.main.temp} degrees in ${weather.name}`
        console.log(message);
    }
})