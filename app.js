document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();

    if (!city) {
        document.getElementById('weatherData').innerText = "Please enter a city name.";
        return;
    }

    const apiKey = '41c3a8e7b8aed86ed961807b24a8dbb3'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weatherData').innerHTML = 
                    `<h3>Weather in ${data.name}</h3>
                     <p><strong>Description:</strong> ${data.weather[0].description}</p>
                     <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                     <p><strong>Humidity:</strong> ${data.main.humidity}%</p>`;
            } else {
                document.getElementById('weatherData').innerText = 
                    `Error: ${data.message}`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
