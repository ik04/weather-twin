import Navbar from "@/components/Navbar"
import WeatherCard from "@/components/WeatherCard"
import { GlobalContext } from "@/context/GlobalContext"
import React, { useContext } from "react"

const index = () => {
  const { temp, city, maxTemp, minTemp } = useContext(GlobalContext)
  return (
    <div className="bg-blue-400 h-screen">
      <Navbar />
      <h1 className="text-center text-5xl text-white font-semibold  mt-5 ">
        Welcome To Weather Twin
      </h1>
      <p className="text-gray-50 text-center mt-5">
        check out the compare page, please don't mind if there's any issues with
        the api :/
      </p>
      <div className="translate-y-20 mt-20">
        <WeatherCard
          temp={temp}
          isHome={true}
          max={maxTemp}
          min={minTemp}
          city={city}
        />
      </div>
    </div>
  )
}

export default index
