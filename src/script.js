function displayTemperature (response) {
    console.log (response);
}

let apiKey = "37e74cb00c288f7eo2938f4t06eaf3b2";
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=houston&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);