import express from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const weatherData = {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      conditions: response.data.weather[0].description,
    };
    res.json(weatherData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get the weather data." });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
