import SearchBar from "./components/SearchBar";
import Current from "./components/Current";
import TodayForecast from "./components/TodayForecast";
import DaysForecast from "./components/DaysForecast";

import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [data, setData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(true);

  

  useEffect(()=>{
    const getCurrentCoords=()=>{
      return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          }, (error)=>{
          console.log("E: Error getting users current locaiton");
          reject(error);
        });
      });
  }
      const fetchData = async () => {
          const result = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=22e8fa32e0d54bc09bc144901250501&q=${coordinates.latitude},${coordinates.longitude}&days=4`);
          setData(result.data);
          setLoading(false);
      }
      getCurrentCoords().then((res)=>setCoordinates(res))
      .then(fetchData());
  }, [coordinates]);
  
  return (
    <>
    {!loading?<div className="bg-slate-950 text-white">
      <div className="w-[95vw] mx-auto h-screen flex justify-between">
        <div id="left" className="w-[60%]">
          <SearchBar setData={setData} />
          <Current data={data} />
          <TodayForecast forecast={data?.forecast?.forecastday[0].hour}/>
        </div>
        <div id="right" className="bg-black w-[38%]">
          <DaysForecast data={data?.forecast?.forecastday.slice(1)} />
        </div>
      </div>
    </div>:
    <div className="bg-slate-950 h-screen w-screen flex justify-center items-center">
      <p className="text-2xl text-white font-semibold">Loading . . .</p>
    </div>
    }
    </>
  )
}

export default App;