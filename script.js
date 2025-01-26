console.log("Hello");

const API_KEY  = "ed5eb076bcfd46308b341bde23ec4f24";

function renderWeatherInfo(data) {
    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {

    try{
        let city = "goa";

    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units+metric`);
    
    const data = await response.json();

    console.log("Weather data:-> " , data);

    renderWeatherInfo(data);
    }
    catch(err) {

    }
    
} 

async function getCustomWeatherDetails() {
    try{
        let latitude = 17333;
    let longitude = 13.333;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    let data = await result.json();

    console.log(data);
    }
    catch(err) {
        console.log("Error Found" , err);
    } 

}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geoLocation Support");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}