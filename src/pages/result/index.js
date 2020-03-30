import React, { useEffect, useState } from "react"

import Api from "./../../services/api"

import "./style.css"

const kelvinToCelsius = kValue => (kValue - 273.15).toFixed(1)

export default function ResultPage(props){
  const apiKey = "f1476028d7838ead86f82532d22ee375"
  const { title } = props.match.params
  const [data, setData] = useState(undefined)
  const [tempScale, setTempScale] = useState("kelvin")

  useEffect(() =>{
    async function apiRequest(){
      const { data :  { weather : [weatherInfo], main, wind, clouds} } = await Api.get(`/weather?q=${title}&appid=${apiKey}`)
  
      let { temp, feels_like, temp_min, temp_max } = main
  
      const CelsiusTemp = {}
  
      Object.keys({temp, feels_like, temp_min, temp_max}).forEach(item =>(
        CelsiusTemp['C' + item] = kelvinToCelsius(main[item])
      ))
      
      setData({
        main: {...main, ...CelsiusTemp},
        weatherInfo,
        wind,
        clouds,
      })
    }
    apiRequest()
  }, [title])

  const changeMeasurement = e => {
    e.target.innerText === "K" ? e.target.innerText = "°C" : e.target.innerText = "K"
    tempScale === "Celsius" ? setTempScale("Kevin") : setTempScale("Celsius")
  }

  if (data){
    const {weatherInfo, main, wind } = data
    return(
      <div className="result-container">
        <h1>{title}</h1>
        <div className="content-container">
          <div className="main-content">
            <img src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} alt="weather icon"/>
            <div className="info">
              <h3>{weatherInfo.description}</h3>
            </div>
          </div>
          <div className="moreInfo-content">
            <button id="changeBtn" onClick={e => changeMeasurement(e)}>°C</button>
            <p><strong>Temperature: </strong> {tempScale === "Celsius" ? main.Ctemp + "°C" : main.temp + " K"}</p>
            <p><strong>Feels like: </strong> {tempScale === "Celsius" ? main.Cfeels_like + "°C" : main.feels_like + " K"}</p>
            <p><strong>Temp. Min: </strong> {tempScale === "Celsius" ? main.Ctemp_min + "°C" : main.temp_min +" K"}</p>
            <p><strong>Temp. Max: </strong> {tempScale === "Celsius" ? main.Ctemp_max + "°C": main.temp_max +" K"}</p>
            <p><strong>Humidity: </strong> {main.humidity}%</p>
            <p><strong>Wind: </strong> {wind.speed} Km/h / {wind.deg}°</p>      
          </div>   
        </div>
      </div>
    )
  }else{
    return null
  }
}