const weather = new Weaher('Merlo', 'ar');

document.addEventListener('DOMContentLoaded', getWeather())

function getWeather(){
    weather.getWeather()
        .then(data => console.log(data))
        .catch(err => console.log(err));
}
