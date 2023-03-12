import React, { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import axios from "axios"

const GlobalState = (props) => {
  const [temp, setTemp] = useState()
  const [maxTemp, setMaxTemp] = useState()
  const [minTemp, setMinTemp] = useState()
  const city = "Chennai"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9cea11792033d87ab898b1ed61c17d8c`
  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(url)
      console.log(resp)
      setTemp(resp.data.main.temp + "°")
      setMaxTemp(resp.data.main.temp_max + "°")
      setMinTemp(resp.data.main.temp_min + "°")
    }
    getWeather()
  }, [])
  return (
    <GlobalContext.Provider value={{ temp, city, maxTemp, minTemp }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
