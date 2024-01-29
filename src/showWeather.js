import getDateInfo from "./date";

const location = document.querySelector(".location");
const date = document.querySelector(".date");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const today_icon = document.querySelector(".today-icon");
const today_temp = document.querySelector(".today-temp");
const today_feel = document.querySelector(".today-feel");
const today_condition = document.querySelector(".today-condition");
const today_humidity = document.querySelector(".today-humidity");
const today_wind = document.querySelector(".today-wind");
const today_uv = document.querySelector(".today-uv");
const today_vis = document.querySelector(".today-vis");
const today_rain = document.querySelector(".today-rain");
const today_snow = document.querySelector(".today-snow");

export default function displayWeather(data) {
  // console.log(data);
  setMainData(data);
}

function setMainData(data) {
  console.log(data);
  location.textContent = `${data.city} , ${data.country}`;
  today_icon.src = getIconSrc(data);
  date.textContent = getDateInfo();
  sunrise.textContent = data.sunrise;
  sunset.textContent = data.sunset;
  today_temp.textContent = `${data.temp_c} °C`;
  today_feel.textContent = `feels ${data.feel_c} °C`;
  today_condition.textContent = data.condition;
  today_humidity.textContent = `Humidity: ${data.humidity}%`;
  today_wind.textContent = `Wind: ${data.wind} kph`;
  today_uv.textContent = `UV: ${data.uv}`;
  today_vis.textContent = `Visibility: ${data.vis_km} km`;
  today_rain.textContent = `Chance of Rain: ${data.chance_rain}%`;
  today_snow.textContent = `Chance of Snow ${data.chance_snow}%`;
}

function getIconSrc(data) {
  let time = "";
  const name = data.icon.slice(-7);
  if (data.is_day) {
    time = "day";
  } else {
    time = "night";
  }
  const iconSrc = `./icons/${time}/${name}`;
  return iconSrc;
}

function getTemp(data) {}

// function createBox(data) {
//   const box = document.createElement("div");
//   box.classList.add("weather-box");

//   const icon = document.createElement("img");
//   icon.src = getIconSrc(data);

//   const condition = document.createElement("p");
//   condition.classList.add(".condition");
//   condition.textContent = data.condition;

//   const temp = document.createElement("p");
//   temp.textContent = data.temp_c;

//   box.appendChild(icon);
//   box.appendChild(condition);
//   box.appendChild(temp);

//   return box;
// }
