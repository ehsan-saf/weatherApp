let currentWeather = {};
let forecastWeather = [];

export default async function getWeather(locationName) {
  const data = await getData(locationName);
  getForecast(data);
  const { current, location } = data;
  const { sunrise, sunset } = data.forecast.forecastday[0].astro;
  currentWeather = {
    condition: current.condition.text,
    icon: current.condition.icon,
    is_day: current.is_day,
    temp_c: current.temp_c,
    temp_f: current.temp_f,
    feel_c: current.feelslike_c,
    feel_f: current.feelslike_f,
    humidity: current.humidity,
    wind: current.wind_kph,
    uv: current.uv,
    country: location.country,
    city: location.name,
    sunrise,
    sunset,
  };
  return currentWeather;
}

async function getForecast(data) {
  const days = [];
  const dt = await data;
  dt.forecast.forecastday.forEach((el) => {
    const { day } = el;
    days.push({
      avgtemp_c: day.avgtemp_c,
      avgtemp_f: day.avgtemp_f,
      mintemp_c: day.mintemp_c,
      mintemp_f: day.mintemp_f,
      maxtemp_c: day.maxtemp_c,
      maxtemp_f: day.maxtemp_f,
    });
  });
  forecastWeather = days;
}

async function getData(location) {
  const address = `https://api.weatherapi.com/v1/forecast.json?key=92af089f4bee44ea93b193454241501&days=3&q=${location}`;
  const request = await fetch(address);
  const response = await request.json();
  console.log(response);
  return response;
}
