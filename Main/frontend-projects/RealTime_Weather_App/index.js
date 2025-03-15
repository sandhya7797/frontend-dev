const tempRef = document.querySelector('.container .weather .temp');
const dateTimeRef = document.querySelector('.container .weather .time_location p');
const locRef = document.querySelector('.container .weather .time_location span');
const imageRef = document.querySelector('.container .weather .weather_condition p img');
const conditionRef = document.querySelector('.container .weather .weather_condition span');
const inputRef = document.querySelector('.searchField');
const buttonRef = document.querySelector('button[type="submit"]');

buttonRef.addEventListener('click', function(e) {
    e.preventDefault();
    const city = inputRef.value;
    fetchWeatherData(city);
})

function fetchWeatherData(city) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${city}`)
    .then(res => res.json())
    .then(data => setWeatherData(data))
    .catch(e => { console.log('Invalid Input : ', e.message) });
}

function setWeatherData(data) {
    tempRef.innerText = data.current.temp_c;
    locRef.innerText = data.location.name;
    imageRef.src = data.current.condition.icon;
    dateTimeRef.innerText = data.location.localtime;
    conditionRef.innerText = data.current.condition.text;
}

