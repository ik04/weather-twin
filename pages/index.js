import Navbar from "@/components/Navbar"
import WeatherCard from "@/components/WeatherCard"
import { GlobalContext } from "@/context/GlobalContext"
import React, { useContext } from "react"

const index = () => {
  const { temp, city } = useContext(GlobalContext)
  return (
    <div className="bg-blue-100 h-screen">
      <Navbar />
      <h1 className="text-center text-5xl mt-3 font-extralight">
        Welcome To Weather Twin
      </h1>
      <p className="text-gray-500 text-center mt-5">
        check out the compare page, please don't mind if there's any issues with
        the api :/
      </p>
      <div className=" mt-20">
        <WeatherCard temp={temp} city={city} />
      </div>
    </div>
  )
}

export default index
