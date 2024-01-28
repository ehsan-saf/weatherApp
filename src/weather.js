export default async function getWeather(locationName) {
  const data = await getData(locationName);
  const { current, location } = data;
  const { sunrise, sunset } = data.forecast.forecastday[0].astro;
  return {
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
}

async function getData(location) {
  const address = `https://api.weatherapi.com/v1/forecast.json?key=92af089f4bee44ea93b193454241501&q=${location}`;
  const request = await fetch(address);
  console.log(request);
  const response = await request.json();
  console.log(response);
  return response;
}
