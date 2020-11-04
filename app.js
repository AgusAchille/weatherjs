const storage = new Storage ('Merlo', 'AR');
const weather = new Weaher(storage.getLocationData().city, storage.getLocationData().country);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather())

document.querySelector('#w-change-btn').addEventListener('click',
    (e) =>{
        const city = document.querySelector('#city').value;
        const country = document.querySelector('#country').value;

        if(city){
            weather.changeLocation(city, country);
            getWeather();
        }

        $('#locModal').modal('hide');
    })

function getWeather(){
    weather.getWeather()
        .then(data => {
            if (data.cod === 200){
                ui.paint(data);
                storage.setLocationData(data.name, data.sys.country)
            }
        })
        .catch(err => console.log(err));
}

