let now = new Date();

let time = document.querySelector(".time");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
if (hours > 12) {
  hours = hours - 12;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
time.innerHTML = `${day} ${hours}:${minutes}`;
//

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(city) {
  let apiKey = "ce9b3066ade953375cd2573395df660e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let city = document.querySelector("#city").value;
  search(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function getCurrentLocation() {
  navigator.geolocation.getCurrentLocation(showPosition);
}

search("Chicago");

//let temperature = Math.round(response.data.main.temp);
// let temperatureElement = document.querySelector("#temperature");
// temperatureElement.innerHTML = `${temperature}`; //

// function convertF(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 66;
// }
// let fLink = document.querySelector("#fahrenheit");
// fLink.addEventListener("click", convertF);

// //
// function convertC(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 19;
// }

// let cLink = document.querySelector("#celcius");
// cLink.addEventListener("click", convertC);
