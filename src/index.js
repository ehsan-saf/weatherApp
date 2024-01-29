import displayWeather from "./showWeather";
import initControls from "./userInput";
import getWeather from "./weather";

initControls();

// if ("geolocation" in navigator) {
//   navigator.geolocation.getCurrentPosition((pos) => {
//     getWeather(`${pos.coords.latitude},${pos.coords.longitude}`).then((rs) => {
//       displayWeather(rs);
//     });
//   });
// }
