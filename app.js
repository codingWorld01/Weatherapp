const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const location_not_found = document.getElementById('location-not-found');
const weather_body = document.getElementById('weather-body');


async function checkWeather(city) {
    const api_key = "3d8b9b62e21ebcee71486cf03926cf22";
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod == 404) {
        location_not_found.style.display = "flex";
        weather_body.style.display = 'none';
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weatherImg.src = "./img/cloud.png";
            break;

        case 'Clear':
            weatherImg.src = "./img/clear.png";
            break;

        case 'Rain':
            weatherImg.src = "./img/rain.png";
            break;

        case 'Mist':
            weatherImg.src = "./img/mist.png";
            break;

        case 'Snow':
            weatherImg.src = "./img/snow.png";
            break;

    }
    // console.log(weather_data);

}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})