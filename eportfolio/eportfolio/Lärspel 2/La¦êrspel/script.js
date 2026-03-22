/*
Gruppnummer: 19
Gruppmedlemmar: Shoajb Ahmadi, Ali Hussein
*/

let level = 0;
let score = 0;
let weatherData = {};


// Startar spelet och visar spelvyn
function startGame(){
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    level = 0;
    score = 0;

    nextLevel();
}


// Går vidare till nästa nivå eller avslutar spelet
function nextLevel(){
    level++;

    if(level > 5){
        endGame();
        return;
    }

    document.getElementById("feedback").innerText = "";
    document.getElementById("nextBtn").classList.add("hidden");
    document.getElementById("levelText").innerText = "Nivå " + level;

    generateWeather();
    updateWeatherVisual();
}


// Skapar slumpmässig temperatur, vind och moln
function generateWeather(){
    weatherData.temp = Math.floor(Math.random() * 35);
    weatherData.wind = Math.floor(Math.random() * 20);

    let clouds = ["lite moln", "många moln", "mörka moln"];
    weatherData.cloud = clouds[Math.floor(Math.random() * 3)];

    document.getElementById("temp").innerText =
        "Temperatur: " + weatherData.temp + "°C";

    document.getElementById("wind").innerText =
        "Vind: " + weatherData.wind + " m/s";

    document.getElementById("cloud").innerText =
        "Moln: " + weatherData.cloud;
}


// Bestämmer vilket svar som är rätt baserat på väderdata
function getCorrectWeather(){
    if(weatherData.wind > 15){
        return "storm";
    }

    if(weatherData.cloud === "mörka moln" && weatherData.temp < 20){
        return "rain";
    }

    if(weatherData.cloud === "många moln"){
        return "cloudy";
    }

    return "sun";
}


// Uppdaterar bilden och bakgrunden beroende på väder
function updateWeatherVisual(){
    let imagePath = "images/cloud.png";
    let backgroundClass = "cloudy-bg";

    if(weatherData.wind > 15){
        imagePath = "images/storm.png";
        backgroundClass = "storm-bg";
    } else if(weatherData.cloud === "mörka moln" && weatherData.temp < 20){
        imagePath = "images/rain.png";
        backgroundClass = "rain-bg";
    } else if(weatherData.cloud === "många moln"){
        imagePath = "images/cloud.png";
        backgroundClass = "cloudy-bg";
    } else {
        imagePath = "images/sun.png";
        backgroundClass = "sun-bg";
    }

    document.getElementById("weatherVisual").src = imagePath;
    setWeatherBackground(backgroundClass);
}


// Byter bakgrundsfärg på sidan
function setWeatherBackground(bgClass){
    document.body.classList.remove("sun-bg", "rain-bg", "storm-bg", "cloudy-bg");
    document.body.classList.add(bgClass);
}


// Kollar spelarens svar och ger feedback
function checkAnswer(playerChoice){
    let correct = getCorrectWeather();

    if(playerChoice === correct){
        score++;
        document.getElementById("feedback").innerText = "Rätt! Bra prognos.";
    } else {
        document.getElementById("feedback").innerText =
            "Fel prognos. Rätt svar var: " + translateWeather(correct);
    }

    document.getElementById("nextBtn").classList.remove("hidden");
}


// Gör om interna värden till text (t.ex. "sun" → "Soligt")
function translateWeather(weather){
    if(weather === "sun") return "Soligt";
    if(weather === "rain") return "Regn";
    if(weather === "storm") return "Storm";
    if(weather === "cloudy") return "Molnigt";
    return weather;
}


// Visar slutskärmen och resultatet
function endGame(){
    document.getElementById("game").classList.add("hidden");
    document.getElementById("endScreen").classList.remove("hidden");

    document.getElementById("scoreText").innerText =
        "Du fick " + score + " av 5 rätt.";

    document.body.classList.remove("sun-bg", "rain-bg", "storm-bg", "cloudy-bg");
}


// Startar om spelet utan att ladda om sidan
function restartGame(){
    document.getElementById("endScreen").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");

    document.body.classList.remove("sun-bg", "rain-bg", "storm-bg", "cloudy-bg");
}