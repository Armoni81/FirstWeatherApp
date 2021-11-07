let button = document.getElementById("sub")
let input = document.getElementById("input")
let forecast = document.getElementById("forecast")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")








fetch("https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=7983f9630bd1335bc5529b4c48cf145a")
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
        return data
    })
    .then(function(data){
        console.log(data.main.temp)
        let temp = data.main.temp
       var element= document.getElementById("ATL")
       let i = (temp - 273.15) * 9/5 +32
       element.innerHTML = i.toFixed(0) + "°"
       return data
    })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=7983f9630bd1335bc5529b4c48cf145a")
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
        return data
    })

    .then(function(data){
        console.log(data.main.temp)
        let temp= data.main.temp 
        var element = document.getElementById("chi") 
        let i = (temp - 273.15) * 9/5 +32
        element.innerHTML= i.toFixed(0) + "°"

        return data 

    })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=7983f9630bd1335bc5529b4c48cf145a")
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
        return data
    })
    .then(function(data){
        console.log(data.main.temp)
        let temp = data.main.temp
        let element= document.getElementById("cha")
        let i = (temp - 273.25) * 9/5 + 32
        element.innerHTML = i.toFixed(0) + "°"
    })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Ohio&appid=7983f9630bd1335bc5529b4c48cf145a")
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
        return data
    })
    .then(function(data){
        console.log(data.main.temp)
        let temp = data.main.temp
        let element= document.getElementById("oh")
        let i = (temp - 273.25) * 9/5 + 32
        element.innerHTML = i.toFixed(0) + "F°"  
    
    })

    function loadBox1 (){
        let cityName = input.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7983f9630bd1335bc5529b4c48cf145a`)
        .then(function(response){
        console.log(response)
        return response.json();
        })
        .then(function(data){
        //console.log(data)
        return data;
        })
        .then(function(data){
        console.log(data.main.temp);
        let temp = data.main.temp;
        let box1 = document.getElementById("box1");
        let i = (temp - 273.25) * 9/5 + 32
        box1.innerHTML = i.toFixed(0) + " "+"Degrees";
        forecast.innerHTML= cityName +" "+ " Forecast"
        let windSpeed = data.wind.speed
        box2.innerHTML= windSpeed + " " + "Wind/Speed"
        let humidity = data.main.humidity
        box3.innerHTML= humidity + " " +"Humidity"
        let weather= data.weather[0].description
        box4.innerHTML = weather

        return data;
        })}

button.addEventListener("click",loadBox1);






    // /*let cityName= input.value
    // fetch("https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7983f9630bd1335bc5529b4c48cf145a")
    // .then(function(response){
    //     console.log(response)
    //     return response.json()
    // })
    // .then(function(data){
    //     console.log(data)
    //     return data
    // })
    // .then(function(data){
    //     console.log(data.main.temp)
    //     let temp = data.main.temp
    //     let box1 = document.getElementById("box1")
    //     box1.innerHTML = temp
    //     return data
    // })
