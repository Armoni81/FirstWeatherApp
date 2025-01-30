let button = document.getElementById("sub");
let input = document.getElementById("input");
let forecast = document.getElementById("forecast");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
const arrOfMajorCities = ["Atlanta", "Chicago", "Charlotte", "Cleveland"];

arrOfMajorCities.forEach( async (city) => {
  try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7983f9630bd1335bc5529b4c48cf145a`)
      const data = await response.json()
      let element = document.getElementById(city.substring(0, 3));
      let toFarenheight = ((data.main.temp - 273.15) * 9) / 5 + 32;
      element.innerHTML = toFarenheight.toFixed(0) + "°";
  } catch (error){
    console.error(error)
  }
 
});

function loadBox1() {
  let cityName = input.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7983f9630bd1335bc5529b4c48cf145a`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      //console.log(data)
      return data;
    })
    .then(function (data) {
      console.log(data.main.temp);
      let temp = data.main.temp;
      let box1 = document.getElementById("box1");
      let i = ((temp - 273.25) * 9) / 5 + 32;
      box1.innerHTML = i.toFixed(0) + " " + "Degrees";
      forecast.innerHTML = cityName + " " + " Forecast";
      let windSpeed = data.wind.speed;
      box2.innerHTML = windSpeed + " " + "Wind/Speed";
      let humidity = data.main.humidity;
      box3.innerHTML = humidity + " " + "Humidity";
      let weather = data.weather[0].description;
      box4.innerHTML = weather;

      return data;
    });
}

button.addEventListener("click", loadBox1);
