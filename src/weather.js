export default async function getWeather(location) {
  const data = (await getData(location)).current;
  return {
    condition: data.condition.text,
    icon: data.condition.icon,
    temp_c: data.temp_c,
    temp_f: data.temp_f,
    humidity: data.humidity,
  };
}

async function getData(location) {
  const address = `https://api.weatherapi.com/v1/current.json?key=92af089f4bee44ea93b193454241501&q=${location};
    `;
  const request = await fetch(address);
  return request.json();
}
