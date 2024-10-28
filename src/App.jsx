
import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from '../components/weatherInfo/weatherInfo'
import WeatherInfo5Day from '../components/weatherInfo5Day/weatherInfo5Day'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Day, setWeather5Day] = useState()
  const inputRef = useRef() 

 async function searchCity(){
 const city = inputRef.current.value
 const key = "49047af61af75d540e2b649214b1c931"

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
 const url5Day = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

const apiInfo = await axios.get(url)
const apiInfo5Day = await axios.get(url5Day)

setWeather5Day(apiInfo5Day.data)
setWeather(apiInfo.data)

  }

  return (
    <>
      <div className="container">
        <h1> Previsão do tempo</h1>
        <input ref={inputRef} type='text' placeholder='Digite o nome da Cidade' />
        <button onClick={searchCity}>Busca</button>

       {weather &&  <WeatherInfo weather={weather} />}
       {weather5Day &&  <WeatherInfo5Day weather5Day={weather5Day} />}
      </div>
    </>
  )
}

export default App
