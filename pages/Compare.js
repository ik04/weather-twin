import CompareWeatherCard from "@/components/CompareWeatherCard"
import Navbar from "@/components/Navbar"
import WeatherCard from "@/components/WeatherCard"
import { GlobalContext } from "@/context/GlobalContext"
import axios from "axios"
import React, { useContext, useState } from "react"

const Compare = () => {
  const { temp, city } = useContext(GlobalContext)
  const [temperature, setTemperature] = useState()
  const [displayTemp, setDisplayTemp] = useState()
  const [comparedCity, setComparedCity] = useState("")
  const [displayError, setDisplayError] = useState("")
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${comparedCity}&units=metric&appid=9cea11792033d87ab898b1ed61c17d8c`

  const getWeather = async (e) => {
    // * Prevents refresh
    e.preventDefault()
    try {
      const resp = await axios.get(url)
      console.log(resp)
      setTemperature(resp.data.main.temp)
      setDisplayTemp(resp.data.main.temp + "°")
    } catch (error) {
      setDisplayError("An Error Occured, please enter a valid city")
    }
  }
  const d = new Date()
  var day = d.getDay()
  switch (day) {
    case 1:
      day = "Monday"
      break
    case 2:
      day = "Tuesday"
      break
    case 3:
      day = "Wednesday"
      break
    case 4:
      day = "Thursday"
      break
    case 5:
      day = "Friday"
      break
    case 6:
      day = "Saturday"
      break
    case 7:
      day = "Sunday"
      break
  }

  return (
    <div className="bg-blue-400 h-screen overflow-y-hidden">
      <Navbar />
      <div className="absolute left-1/2 top-40 -translate-x-1/2 bg-blue-300 p-20 rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-center text-5xl font-extrabold">
            Today's Day: {day}
          </h1>
          <h1 className="text-center  text-4xl ">Your Location:</h1>
          <div className="mt-10 mb-10">
            <WeatherCard temp={temp} city={city} />
          </div>
          <div className=" flex mb-5 justify-center">
            <h1 className="text-center text-2xl">Compare Cities:</h1>
            <form onSubmit={getWeather}>
              <input
                type="text"
                className="border border-black p-3 mx-5 ml-16"
                name="city"
                onChange={(e) => {
                  setComparedCity(e.target.value)
                  setDisplayError("")
                  setDisplayTemp("")
                }}
              />
              <button className="bg-yellow-300 p-3 transition delay-150 ease-in hover:bg-blue-400 hover:text-white  text-black rounded-full">
                Submit
              </button>
            </form>
          </div>
          {/* check for temperature to set svg */}
          <p className="text-red-500 text-center text-xl font-thin">
            {displayError}
          </p>
          {temperature <= 8 ? (
            <CompareWeatherCard
              city={comparedCity}
              cold={true}
              temp={displayTemp}
            />
          ) : (
            <CompareWeatherCard
              city={comparedCity}
              cold={false}
              temp={displayTemp}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Compare
// TODO make it more similar to the figma design as refactor tommorow
