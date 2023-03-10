function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  console.log(response.data);
 
}

function search(city) {
  let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Houston&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
