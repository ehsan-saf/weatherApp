import getWeather from "./weather";
import displayWeather from "./showWeather";

const input = document.querySelector(".location-input");
const searchButton = document.querySelector(".search-button");

export default function initControls() {
  searchButton.addEventListener("click", getInput);
}

function getInput() {
  if (input.value.trim() !== "") {
    const weatherPromise = getWeather(input.value);
    weatherPromise.then((rs) => displayWeather(rs));
  }
}
