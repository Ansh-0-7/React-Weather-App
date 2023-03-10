//https://api.openweathermap.org/data/2.5/weather?q=saharanpur&appid=d55694a31ecbcc86f4aed635a68d3e1a
import React, {useState,useEffect} from 'react'
import Weathercard from './Weathercard';
import "./style.css"

const Temp = () => {
    const [searchValue , setSearchValue]= useState("Delhi");
    const [tempInfo ,setTempInfo]= useState({});
    const getWeatherInfo= async ()=>{
try{
    let url=`https:api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d55694a31ecbcc86f4aed635a68d3e1a`;
    let res= await fetch(url);
    let data =await res.json();
    // console.log(data)
    
    const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      }
      setTempInfo(myNewWeatherInfo);
    }

    catch(error){
        console.log(console.error)
    }
}

    
   useEffect(()=>{
       
       getWeatherInfo()
    }
        ,[]);
    
    
  return (
      <>
       <div className="wrap">
          <div className="search">
             <input
             type="search"
             placeholder="Enter city name..."
             autoFocus
             id="search"
             className="searchTerm"
             value={searchValue}
             onChange={(e)=>setSearchValue(e.target.value)}
             />
             <button className="searchButton" type="button" onClick={getWeatherInfo}>
                Search
             </button>
           </div>
       </div>
            
      <Weathercard tempInfo={tempInfo}/>
    </>
    
  )
};

export default Temp
