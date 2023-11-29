const apikeys = "a1a695a74b81376eb56f4f06181a734d";

const weatherDataEl = document.getElementById("weather-data")
const cityInputs = document.getElementById("city-inputs");

const formE1 = document.querySelector("form");

formE1.addEventListener("submit", (event)=> {
    event.preventDefault();
    const cityValue = cityInputs.value;
    getWeatherData(cityValue);

})

async function getWeatherData(cityValue) {
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${cityValue}&appid=${apikeys}&units=metric`);
        if(!response.ok) {
            throw new Error("Network not Response was not ok");
        }

        else {
            const data = await response.json();
            console.log(data);
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const icon = data.weather[0].icon ; 
            const details = [`Feels Like: ${Math.round(data.main.feels_like)}`,
                              `Humidity: ${data.main.humidity}%`,
                              `Wind speed: ${data.wind.speed} m/s` , 
        
        ];

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="">`;
        weatherDataEl.querySelector(".temperature").textContent = `${temperature} °C`;
        weatherDataEl.querySelector(".description").textContent = `${description} `;
        weatherDataEl.querySelector(".details").innerHTML = details.map((details) => `<div> ${details}</div>`).join("");
        

        }

        
    }
    catch (error){

    }
}