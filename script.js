let city = document.querySelector("#whereName");
let today = new Date();
let dataToday = document.querySelector("#whenName");
let tempNow = document.querySelector("#temp");
let tempFeelsLike = document.querySelector("#feelsLike");
let conditions = document.querySelector("#conditions");
let variation = document.querySelector("#variation");
const block = document.querySelector(".block");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const api = {
 //ссылка
 endpoint: "https://api.openweathermap.org/data/2.5/",
 //api key
 key: "5051a15e828d35e1ddb3b53ab878b7e8",
};

const input = document.querySelector("#inputCity");
input.addEventListener("keypress",enter);

function enter(e){
    if (e.keyCode===13){
        if(input.value===""||!isNaN(input.value)){
        alert("Please enter name of city!")
    }else
    {getInfo(input.value);}

    }
}

async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const res2 = await res.json();
    displayResult(res2);
}

function displayResult(res2) {
    block.style.display = "block";
    city.textContent = `${res2.name}, ${res2.sys.country}`;
    dataToday.textContent = days[today.getDay()]+" "+today.getDate()+" "+months[today.getMonth()]+" "+today.getFullYear();
    tempNow.innerHTML = `${Math.round(res2.main.temp)}&#176`;
    tempFeelsLike.innerHTML = `Feels like: ${Math.round(res2.main.feels_like)}&#176`;
    conditions.textContent = res2.weather[0].main;
    variation.innerHTML = `Min: ${res2.main.temp_min}&#176  Max: ${res2.main.temp_max}&#176`;
}
