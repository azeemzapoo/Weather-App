const apikey = "98fb2cfc528c160968b995067b22247e"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const weather_icon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    var cityname = document.getElementsByClassName("cityname").value;
    const response = await fetch(apiurl+ `&q=${city}` + `&appid=${apikey}`);
    
    var data = await response.json();

    console.log(data);

    console.log(data.wind.speed );

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



    if(data.weather[0].main === "Clear"){
        weather_icon.src = "images/images/clear.png";
    }else if(data.weather[0].main === "Clouds"){
        weather_icon.src = "images/images/clouds.png";
    }else if(data.weather[0].main === "Drizzle"){
        weather_icon.src = "images/images/drizzle.png";
    }else if(data.weather[0].main === "Humidity"){
        weather_icon.src = "images/images/humidity.png";
    }else if(data.weather[0].main === "Mist"){
        weather_icon.src = "images/images/mist.png";
    }else if(data.weather[0].main === "Rain"){
        weather_icon.src = "images/images/rain.png";
    }else if(data.weather[0].main === "Snow"){
        weather_icon.src = "images/images/snow.png";
    }else if(data.weather[0].main === "Wind"){
        weather_icon.src = "images/images/wind.png";
    }

    document.querySelector(".weather").style.display = "block";
}
var cityname = document.querySelector(".search input");

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    checkWeather(cityname.value);
});


