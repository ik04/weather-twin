import React, { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import axios from "axios"

const GlobalState = (props) => {
  const [temp, setTemp] = useState()
  const city = "Chennai"
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9cea11792033d87ab898b1ed61c17d8c`
  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(url)
      console.log(resp)
      setTemp(resp.data.main.temp + "°")
    }
    getWeather()
  }, [])
  return (
    <GlobalContext.Provider value={{ temp, city }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
