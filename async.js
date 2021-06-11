const apiKey = 'db48802246a929a52298c78da11148d0';

const getWeatherData = async city =>{
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    updateUI(data);
}

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',() => {
    //console.log('i am clicked');
    const inputCity = document.getElementById('cityInput').value;
    getWeatherData(inputCity);
})

const updateUI = data => {
    document.getElementById('cityName').innerText = data.name || "unknown location";
    document.getElementById('temperature').innerText = (data.main.temp - 273).toFixed(2);
    document.getElementById('weatherStatus').innerText = data.weather[0].main ;
    document.getElementById('weatherIcon').setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('cityName').value = "";
}