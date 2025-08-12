const apiKey = "ff6186c37a80285f00bb61e13c588d76";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiURL}${city}&appid=${apiKey}`);
    
    if (!response.ok) {
        alert("City not found!");
        return;
    }

    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherMain = data.weather[0].main;

    if (weatherMain === "Clouds") {
        weatherIcon.src = "cloud.png";
    } else if (weatherMain === "Rain") {
        weatherIcon.src = "thunder.png";
    } else if (weatherMain === "Clear") {
        weatherIcon.src = "cloudy.png";
    } else if (weatherMain === "Drizzle") {
        weatherIcon.src = "heavy-rain.png";
    } else if (weatherMain === "Mist") {
        weatherIcon.src = "cloud.png";
    } 
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    }
});


checkWeather();


