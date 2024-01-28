import getWeather from "./weather";
import displayWeather from "./showWeather";

const APIKEY = "92af089f4bee44ea93b193454241501";

const input = document.querySelector(".location-input");
const locationList = document.querySelector(".location-list");
const searchButton = document.querySelector(".search-button");

let selectedName = "";
let selectedValue = "";

export default function initControls() {
  input.addEventListener("input", getLocations);
  searchButton.addEventListener("click", getInput);
}

function getInput() {
  let location = "";
  if (selectedValue !== "") {
    location = selectedValue;
  } else if (input.value.trim() !== "") {
    location = input.value;
  }
  const weatherPromise = getWeather(location);
  weatherPromise.then((rs) => displayWeather(rs));
}

async function getLocationArray(name) {
  const request =
    await fetch(`https://api.weatherapi.com/v1/search.json?key=${APIKEY}&q=${name}
  `);
  const response = await request.json();
  return response;
}

function getLocations() {
  locationList.innerHTML = "";
  selectedName = "";
  selectedValue = "";
  locationList.style.display = "flex";
  const name = input.value;
  if (name !== "") {
    getLocationArray(name).then((arr) => {
      arr.forEach((location) => {
        const option = document.createElement("div");
        option.classList.add("location-option");
        option.dataset.value = `${location.lat},${location.lon}`;
        option.textContent = `${location.name} , ${location.country}`;
        option.addEventListener("click", setData);
        locationList.appendChild(option);
      });
    });
  }
}

function setData(e) {
  locationList.style.display = "none";
  const option = e.target;
  selectedName = option.textContent;
  selectedValue = option.dataset.value;
  input.value = selectedName;
  const weatherPromise = getWeather(selectedValue);
  weatherPromise.then((rs) => displayWeather(rs));
}
