let button = document.getElementById("sub");
let input = document.getElementById("input");
let forecast = document.getElementById("forecast");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
const arrOfMajorCities = ["Atlanta", "Chicago", "Charlotte", "Cleveland"];

arrOfMajorCities.forEach( async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7983f9630bd1335bc5529b4c48cf145a`
    );
    const data = await response.json();
    let element = document.getElementById(city.substring(0, 3));
    let toFarenheight = ((data.main.temp - 273.15) * 9) / 5 + 32;
    element.innerHTML = toFarenheight.toFixed(0) + "°";
  } catch (error) {
    console.error(error);
  }
});

const loadWeatherData = async () => {
  let cityName = input.value;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7983f9630bd1335bc5529b4c48cf145a`
    );
    const data = await response.json();
    let box1 = document.getElementById("box1");
    let toFarenheight = ((data.main.temp - 273.25) * 9) / 5 + 32;
    let weather = data.weather[0].description;

    box1.innerHTML = toFarenheight.toFixed(0) + " " + "Degrees";
    forecast.innerHTML = cityName + " " + " Forecast";
    box2.innerHTML = data.wind.speed + " " + "Wind/Speed";
    box3.innerHTML = data.main.humidity + " " + "Humidity";
    box4.innerHTML = weather;
  } catch (err) {
    console.error(err);
  }
}

button.addEventListener("click", loadWeatherData);
