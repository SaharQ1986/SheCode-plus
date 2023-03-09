let sat = document.querySelector(".sat");
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
let hour = date.getHours();
let minut = date.getMinutes();
sat.innerHTML = `${day} ${hour}:${minut}`;

//////
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let location = document.querySelector("#search-city");
  let h5 = document.querySelector("h5");
  h5.innerHTML = `${location.value}`;
});

///

// let link = document.querySelectorAll(".link");
// let span = document.querySelector("span");
// console.log(span);
// let temp = document.querySelector(".temp").innerHTML;

// let celsius = document.querySelector(".celsius");
// let fahrenheit = document.querySelector(".fahrenheit");

// celsius.addEventListener("click", function (e) {
//   e.preventDefault();
//   span.innerHTML = 12;
// });
// fahrenheit.addEventListener("click", function (e) {
//   e.preventDefault();
//   span.innerHTML = 46;
// });

////
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
}

let apiKey = `2ff29bed3181c3526c35cc5408037f85`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=29.6092535&lon=52.4896074&appid=${apiKey}&units=metric`;

function showTemp(temps) {
  let temprature = Math.round(temps.data.main.temp);

  let h1 = document.querySelector("h1");
  // h1.innerHTML = `The current temprature is ${temprature}°C`;
}
navigator.geolocation.getCurrentPosition(showPosition);
axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);

/// HomeWork Week 5:

//Current city:
function showInfo(info) {
  let currentcity = document.querySelector(".currentcity");
  let temprature = Math.round(info.data.main.temp);

  let temp = document.querySelector("#temprature");
  let desc = document.querySelector("#description");

  currentcity.innerHTML = info.data.name;
  temp.innerHTML = `${temprature}`;
  desc.innerHTML = info.data.weather[0].description;
}

function showCurrPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = `2ff29bed3181c3526c35cc5408037f85`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showInfo);
}

function getCurrLocation(e) {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrPosition);
}

//Search City:

function showCityInfo(info) {
  let temprature = Math.round(info.data.main.temp);

  let temp = document.querySelector("#temprature");
  let desc = document.querySelector("#description");

  temp.innerHTML = `${temprature}`;
  desc.innerHTML = info.data.weather[0].description;
}

function showCityLocation(e) {
  e.preventDefault();
  let searchcity = document.querySelector("#search-city").value.toLowerCase();
  let h5 = document.querySelector("h5");
  h5.innerHTML = `${searchcity}`;
  searchCity(searchcity);
}
function searchCity(city) {
  let apiKey = `2ff29bed3181c3526c35cc5408037f85`;
  let cityapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(cityapi).then(showCityInfo);
}

let currButton = document.querySelector("button");
currButton.addEventListener("click", getCurrLocation);
let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", showCityLocation);
