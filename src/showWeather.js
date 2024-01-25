export default function displayWeather(current) {
  console.log(current);
  document.querySelector(".weather-icon").src = getIcon(current);
}

function getIcon(data) {
  let time = "";
  const name = data.icon.slice(-7);
  if (data.is_day) {
    time = "day";
  } else {
    time = "night";
  }
  const iconUrl = `./icons/${time}/${name}`;
  return iconUrl;
}

function createBox() {}
