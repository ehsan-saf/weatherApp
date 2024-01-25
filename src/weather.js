export default async function getWeather(location) {
  const data = await getData(location);
  console.log(data);
  const { current } = data;
  return {
    condition: current.condition.text,
    icon: current.condition.icon,
    is_day: current.is_day,
    temp_c: current.temp_c,
    temp_f: current.temp_f,
    humidity: current.humidity,
  };
}

async function getData(location) {
  const address = `https://api.weatherapi.com/v1/forecast.json?key=92af089f4bee44ea93b193454241501&q=${location};
    `;
  const request = await fetch(address);
  return request.json();
}
