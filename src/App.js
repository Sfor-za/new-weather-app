import { useState } from "react";

function App() {
  const [location,setLocation] = useState('');
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "903bd15db3mshba456cf9cfc01d3p1989a4jsn020fc97e9d75",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
 
  setLocation=document.getElementById('city').value;
 
  const getWeather = (city)=>{
   fetch(
     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
     options
     )
     .then((response) => response.json())
     .then((response) => {
       Temp.innerHTML = response.temp;
       Feels_like.innerHTML = response.feels_like;
       Humidity.innerHTML = response.humidity;
       Min_temp.innerHTML = response.min_temp;
       Max_temp.innerHTML = response.max_temp;
       Wind_speed.innerHTML = response.wind_speed;
       console.log(response);
      })
      .catch((err) => console.error(err));
    }
    

  return (
    <div className="app">
      <div className="search">
        <input
          className="searchbar"
          type="text"
          placeholder="Enter a City"
          onChange={location}
          id="city"
          value={location}

        />
      </div>
      <div className="container">
        <div className="top">
          <div className="cityName">
            <p>Delhi</p>
          </div>
          <div className="temp">
            <h1><span id="Temp"></span>°C</h1>
          </div>
          <div className="weather">
            <p>Min <span id="Min_temp"></span>°C</p>
            <p>Max <span id="Max_temp"></span>°C</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Feels Like</p>
            <h2><span id="Feels_like"></span>°C</h2>
          </div>
          <div className="winds">
            <p>Wind Speed</p>
            <h2><span id="Wind_speed"></span></h2>
            <h2></h2>
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <h2><span id="Humidity"></span>%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
