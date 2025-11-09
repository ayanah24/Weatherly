import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
  const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17";
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee";
  const CLOUDY_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda";
  const CLEAR_URL = "https://images.unsplash.com/photo-1601297183305-6df142704ea2";

  const ThermostatIcon = () => {
    if (info.temp > 30) return "🌡️";
    if (info.temp < 10) return "❄️";
    return "🌤️";
  };

  return (
    <div className="InfoBox">
      <h1>WeatherInfo - {info.weather}</h1>
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80 ? RAIN_URL :
              info.temp > 30 ? HOT_URL :
              info.temp < 10 ? COLD_URL :
              info.weather?.toLowerCase().includes('cloud') ? CLOUDY_URL :
              info.weather?.toLowerCase().includes('clear') ? CLEAR_URL :
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
            }
            title="weather condition"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} <ThermostatIcon />
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temperature: {info.temp} °C <ThermostatIcon /></p>
              <p>Humidity: {info.humidity} % 💧</p>
              <p>Pressure: {info.pressure} hPa 🌡️</p>
              <p>Wind Speed: {info.wind} m/s 💨</p>
              <p>Min Temperature: {info.tempMin} °C ❄️</p>
              <p>Max Temperature: {info.tempMax} °C 🌡️</p>
              <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
        </div>
      </div>
  );
}
