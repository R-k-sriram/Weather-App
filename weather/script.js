function getWeather() {
  const apiKey = '399ed97baa8e3ad74616ab25ad540b69';
  const city = document.getElementById('city').value;

  if (!city) {
    alert('Please Enter a City To Search');
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(data => {
    displayWeather(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    alert('Error fetching weather data. Please try again.');
  });
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById('weather-info');

  if (data.cod === '404') {
    weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
    const description = data.weather[0].description;

    const weatherHtml = `
      <p>City: ${cityName}</p>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;

    weatherInfoDiv.innerHTML = weatherHtml;
  }
}
