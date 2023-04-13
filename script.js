const key = "0d6e6467904fd094e1d5bb5174efaeae";


function showDataScreen(data){
    document.querySelector("#titleCity").innerHTML = `Weather in ${data.name} - ${data.sys.country}`;
    document.querySelector("#temp").innerHTML = `${data.main.temp}°C`
    document.querySelector("#conditionWeather").innerHTML = data.weather[0].description;
    document.querySelector("#conditionImg").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector("#humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
}   

async function seachCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json());

    showDataScreen(data);
    console.log(data);
}

function getCity(){
    const city = document.querySelector("#nameCity").value;
    
    seachCity(city);
}