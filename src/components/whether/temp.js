import React, { useEffect, useState } from "react";
import Weathercard from "./Weathercard";
import "./style.css";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo,setTempInfo] =useState({});


  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4a7a6d529c5b2f948b0bdeebd87b2e48`;

      const res = await fetch(url);
      const data = await res.json();

      const {temp,humidity,pressure} = data.main;
      const {main}= data.weather[0];
      const {name} =data;
      const{speed}=data.wind;
      const{country,sunset}=data.sys;

      const myNewWeatherInfo ={
        temp,
        humidity,
        pressure,
        main,
        name,
        speed,
        country,sunset
      };
      setTempInfo(myNewWeatherInfo);
      // console.log(temp," ",humidity," ",pressure," ",weathermood);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            search
          </button>
        </div>
      </div>
      {/* our temp card */}

      <Weathercard tempInfo={tempInfo}/>
    </>
  );
};

export default Temp;
