const list = document.querySelector(".weather-list");

export default function displayWeather(current) {
  const box = createBox(current);
  list.appendChild(box);
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

function createBox(data) {
  const box = document.createElement("div");
  box.classList.add("weather-box");

  const icon = document.createElement("img");
  icon.src = getIconSrc(data);

  const temp = document.createElement("p");
  temp.textContent = data.temp_c;

  box.appendChild(icon);
  box.appendChild(temp);

  return box;
}
