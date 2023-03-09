function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.country;
}

function search(city) {
  let apiKey = "37e74cb00c288f7eo2938f4t06eaf3b2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Houston&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
