class Storage{
    constructor(defaultCity, defaultCountry) {
        this.city;
        this.country;
        this.defaultCity = defaultCity;
        this.defaultCountry = defaultCountry;
    }

    getLocationData() {
        this.city = localStorage.getItem('city')
        this.country = localStorage.getItem('country')

        if(!this.city){
            this.city = this.defaultCity;
            this.country = this.defaultCountry
        }

        return {
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}




