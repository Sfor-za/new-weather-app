import { useState } from "react";

function App() {
  const [location,setLocation] = useState('');
  const [data,setData]= useState('');    

  const getLocation=(e)=>{
    setLocation(e.target.value);
    
  }
  const handleKeyDown=(e)=>{
   if(e.key==='Enter'){
    getWeather(location);
   }
   
  }
  const getWeather =(place)=>{

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'spg3CVZgIDSbSgHK1Y7Dhg==kfB6vXR2lOsuPLxX',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ place, options)
    .then(response => response.json())
    .then(response => {
       setData(response);
    })
    .catch(err => console.error(err));
    
    
  }

  return (
    <div className="app">
      <div className="search">
          <input
            className="searchbar"
            value={location}
            type="text"
            placeholder="Enter a City"
            onChange={getLocation}
            onKeyDown={handleKeyDown}
          />
      </div>
      <div className="container">
        <div className="top">
          <div className="cityName">
           <p className="city">{location}</p>
          </div>
          <div className="temp">
            <h1>{data.temp ?<span>{data.temp}°C</span> : null}</h1>
          </div>
          <div className="weather">
            <p>{data.min_temp ?<span>Min {data.min_temp}°C</span> : null}</p>
            <p>{data.max_temp ?<span>Max {data.max_temp}°C</span> : null}</p>
          </div>
        </div>
        {data.temp!== undefined && <div className="bottom">
          <div className="feels">
          {data.feels_like ?<span><p>Feels Like</p><h2>{data.feels_like}°C</h2></span> : null}
          </div>
          <div className="winds">
           {data.wind_speed ?<span><p>Wind Speed</p><h2>{(data.wind_speed*1.6).toFixed(1)} Km/h</h2></span> : null}
          </div>
          <div className="humidity">
            {data.wind_speed ?<span><p>Humidity</p><h2>{data.humidity}%</h2></span> : null}
          </div>
        </div>}
      </div>
    </div>
  );
}

export default App;
