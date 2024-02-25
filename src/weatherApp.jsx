import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp(){
    const[weatherInfo , setWeatherInfo]=useState({
        city:"delhi",
        feelslike : 24.08,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })

   // for updating the weather in ui element accourding to the search

   let updateInfo = (newinfo) =>{
    setWeatherInfo(newinfo);
   }

    return (
        <>
        <h2 style={{textAlign:"center"}}>Weather App</h2>
        <SearchBox  updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        
        </>
    )
}