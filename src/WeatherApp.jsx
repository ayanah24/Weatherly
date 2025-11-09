import { useState } from 'react';
import  SearchBox from './SearchBox.jsx';
import InfoBox from './infoBox.jsx';

export default function WeatherApp(){
    const [WeatherInfo,setWeatherInfo]=useState({
         city:"lucknow",
        feelsLike: 19.72,
        humidity: 64,
        pressure: 1014,
        temp: 19.99,
        tempMax: 19.99,
        tempMin: 19.99,
        weather: "haze",
        wind: 1.03,
    });
    let updateWeatherInfo=(newInfo)=>{
        setWeatherInfo(newInfo);;
    }
    return(
        <div style={{textAlign:"center"}}>
           <h2>Welcome to weatherly</h2>
              <SearchBox updateWeatherInfo={updateWeatherInfo} />
                <InfoBox info={WeatherInfo} />
        </div>         
    );
}