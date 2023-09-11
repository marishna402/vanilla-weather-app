function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "2c5b2d92c3d0024f4b508a4a4658c674";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Düsseldorf&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
