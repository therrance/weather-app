# Weather App Documentation

## Backend

The backend of the Weather App is implemented in Node.js using Express. It provides an endpoint to fetch weather information for a given city using the OpenWeatherMap API.

### Setup

- Install dependencies: `npm install`
- Run in development mode: `npm run dev`
- Build for production: `npm run build`
- Start in production: `npm start`

### API Endpoint

- GET `/weather/:city`: Fetches current weather information for the specified city.

### Environment Variables

- `OPENWEATHERMAP_API_KEY`: API key for OpenWeatherMap.

## Frontend

The frontend of the Weather App is implemented in React using Vite. It allows users to input a city name and displays the current weather information for that city.

### Setup

- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- Build for production: `npm run build`

### Environment Variables

- `REACT_APP_BACKEND_URL`: URL of the backend server.

## Running with Docker Compose

- Run the full application: `docker-compose up`
