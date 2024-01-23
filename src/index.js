import getWeather from "./weather";

const wd = getWeather("tehran");
wd.then((response) => console.log(response));
