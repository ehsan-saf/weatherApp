import getWeather from "./weather";

const input = document.getElementById("location-name");
const searchButton = document.querySelector(".search-button");

export default function initControls() {
  searchButton.addEventListener("click", getInput);
}

function getInput() {
  if (input.value.trim() !== "") {
    const weatherPromise = getWeather(input.value);
    weatherPromise.then((rs) => console.log(rs));
  }
}
