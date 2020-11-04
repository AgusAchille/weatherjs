class UI {
    constructor() {
        this.container = document.querySelector('.container'); 
        this.location = document.querySelector('#w-location');
        this.description = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.details = document.querySelector('#w-details');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.maxTemp = document.querySelector('#w-max');
        this.minTemp = document.querySelector('#w-min');
    }


    paint(weather){
        this.container.style.opacity = 1;
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.description.textContent = toTitleCase(weather.weather[0].description);
        this.string.textContent = `${weather.main.temp} °C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} °C`;
        this.maxTemp.textContent = `Max: ${weather.main.temp_max} °C`;
        this.minTemp.textContent = `Min: ${weather.main.temp_min} °C`;
    }
}

toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  