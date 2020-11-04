class Weaher {
    constructor(city, country) {
        this.appid = '01d5b0db674eb05b0ee1b72b9713a81a'
        this.units = 'metric'
        this.city = city
        this.country = country
    }

    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.appid}&units=${this.units}`);

        const weatherInfo = await response.json();

        return weatherInfo;
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}