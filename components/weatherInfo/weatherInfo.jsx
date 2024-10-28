import '../weatherInfo/weatherInfo.css'

function weatherInfo({ weather }) {
  // console.log(weather);

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>

      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        <p className="temperatura"> {Math.round(weather.main.temp)}°C</p>
      </div>

      <p className="description">
        {weather.weather[0].description}
      </p>

      <div className='details'>
        <p>Sensação Termica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default weatherInfo;

//  <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
