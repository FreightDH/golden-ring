export async function getWeather(city) {
  if (city === 'Ростов Великий') city = 'Ростов';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=241a6c975817c3a04916e8babb8a5626&units=metric`;
  const result = document.querySelector('.city__weather');

  try {
    const res = await fetch(url);
    const data = await res.json();

    result.innerHTML = `
    <ul class="weather__info">
      <li class="weather__item"><span>${data.main.temp.toFixed(0)}°C</span></li>
      <li class="weather__item">${data.weather[0].description}</li>
      <li class="weather__item">Скорость ветра: ${data.wind.speed.toFixed(0)} м/с</li>
      <li class="weather__item">Влажность: ${data.main.humidity}%</li>
    </ul>
    <i class="weather__icon owf owf-${data.weather[0].id}"></i>
    `;
  } catch (error) {
    console.error(error);
  }
}
