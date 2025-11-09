import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateWeatherInfo}) {
   const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    
    let [city,setCity]=useState("");
    let [error,setError]=useState("");

    let getWeatherInfo=async()=>{
        try{
            const response=await fetch(`${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            let jsonData=await response.json();
            console.log(jsonData);
            let result={
                city:city,
                temp:jsonData.main.temp,
                tempMin:jsonData.main.temp_min,
                tempMax:jsonData.main.temp_max,
                humidity:jsonData.main.humidity,
                pressure:jsonData.main.pressure,
                wind:jsonData.wind?.speed,
                feelsLike:jsonData.main.feels_like,
                weather:jsonData.weather?.[0]?.description,
            };
            console.log(result);
            return result;
        }catch(err){
           console.error(err);
           setError("Failed to fetch weather data. Please try again.");
           return null;
        }
    };

    let handleChange=(e)=>{
        setCity(e.target.value);
    };

    let handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            console.log("Searching weather for:", city);
            let newInfo=await getWeatherInfo();
            if (newInfo) {
                updateWeatherInfo(newInfo);
                setCity("");
                setError("");
            }
        }catch(error){
            console.error(error);
            setError("Failed to fetch weather data. Please try again.");
        }
    };
    return (
        <div className='searchbox'>
         <h3>Search for the weather</h3>
         {error && <p style={{color:"red"}} className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="city name" variant="outlined"  required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant='contained' type='submit'>
                Search
            </Button>
        </form>
        </div>
    );


}