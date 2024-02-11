export const fetchWeather = async (lat, lon) => {
  const key = 'e24b11184acd6b880cd959334989f19f';

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
  );
  const data = await res.json();
  return data;
};
