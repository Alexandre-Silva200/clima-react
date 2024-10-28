import "../weatherInfo5Day/weatherInfo5Day.css";

function weatherInfo5Day({ weather5Day }) {
  console.log(weather5Day);

  let dailyForecast = {};

  for (let forecast of weather5Day.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1,6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <div className="weather-container">
      <h3>Previsão proximas 4 dias </h3>

      <div className="weather-list">
        {next5DaysForecast.map((forecast) => (

        <div key={forecast.td} className="weather-item">
          <p className="forecast-day">{convertDate(forecast)}</p>
          <img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
          />
          <p className="forecast-description">{forecast.weather[0].description}</p>
          <p>
            {Math.round(forecast.main.temp_min)}°C Min /
            {Math.round(forecast.main.temp_max)}°C Max
          </p>
        </div>
       ))}
      </div>
    </div>
  );
}

export default weatherInfo5Day;
