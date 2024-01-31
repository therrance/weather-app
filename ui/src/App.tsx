import React, { useState } from "react";
import axios from "axios";

interface WeatherData {
  temperature: number;
  humidity: number;
  conditions: string;
}

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const backendUrl = "http://localhost:3001";

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/weather/${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <label>
        Enter City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button onClick={getWeatherData}>Get Weather</button>

      {weatherData && (
        <div>
          <h2>Weather Information for {city}</h2>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Conditions: {weatherData.conditions}</p>
        </div>
      )}
    </div>
  );
}

export default App;
