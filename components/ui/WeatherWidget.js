import { useState, useEffect } from 'react'

export default function WeatherWidget({ 
  city = "Lancaster, PA",
  className = "",
  onCityChange = null,
  showCitySelector = false
}) {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCity, setSelectedCity] = useState(city)

  const cities = [
    "Lancaster, PA",
    "Harrisburg, PA", 
    "Philadelphia, PA",
    "Pittsburgh, PA",
    "York, PA",
    "Reading, PA"
  ]

  // City coordinates mapping
  const cityCoordinates = {
    "Lancaster, PA": { lat: 40.0379, lon: -76.3055 },
    "Harrisburg, PA": { lat: 40.2737, lon: -76.8844 },
    "Philadelphia, PA": { lat: 39.9526, lon: -75.1652 },
    "Pittsburgh, PA": { lat: 40.4406, lon: -79.9959 },
    "York, PA": { lat: 39.9626, lon: -76.7277 },
    "Reading, PA": { lat: 40.3357, lon: -75.9269 }
  }

  const getWeatherIcon = (weatherCode) => {
    const iconMap = {
      0: '☀️',   // Clear sky
      1: '☀️',   // Mainly clear
      2: '⛅',   // Partly cloudy
      3: '☁️',   // Overcast
      45: '🌫️', // Fog
      48: '🌫️', // Depositing rime fog
      51: '🌦️', // Light drizzle
      53: '🌦️', // Moderate drizzle
      55: '🌦️', // Dense drizzle
      61: '🌧️', // Slight rain
      63: '🌧️', // Moderate rain
      65: '🌧️', // Heavy rain
      71: '❄️', // Slight snow
      73: '❄️', // Moderate snow
      75: '❄️', // Heavy snow
      77: '❄️', // Snow grains
      80: '🌦️', // Slight rain showers
      81: '🌧️', // Moderate rain showers
      82: '🌧️', // Violent rain showers
      85: '❄️', // Slight snow showers
      86: '❄️', // Heavy snow showers
      95: '⛈️', // Thunderstorm
      96: '⛈️', // Thunderstorm with slight hail
      99: '⛈️'  // Thunderstorm with heavy hail
    }
    return iconMap[weatherCode] || '☁️'
  }

  const formatDayName = (timestamp) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const dayIndex = new Date(timestamp * 1000).getDay()
    
    return {
      full: days[dayIndex],
      short: shortDays[dayIndex]
    }
  }

  const fetchWeatherData = async (cityName) => {
    try {
      setLoading(true)
      setError(null)

      const coords = cityCoordinates[cityName]
      if (!coords) {
        throw new Error('City coordinates not found')
      }

      console.log('Fetching weather for:', cityName, 'at', coords)

      // Using Open-Meteo API - completely FREE, no API key required
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&forecast_days=7`
      
      console.log('API URL:', apiUrl)

      const response = await fetch(apiUrl)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      console.log('API Response:', data)

      // Validate response structure
      if (!data.current || !data.daily) {
        throw new Error('Invalid API response structure')
      }

      // Process forecast data
      const forecastArray = data.daily.time.map((date, index) => {
        const dayNames = formatDayName(new Date(date).getTime() / 1000)
        return {
          day: dayNames,
          high: Math.round(data.daily.temperature_2m_max[index]),
          low: Math.round(data.daily.temperature_2m_min[index]),
          icon: getWeatherIcon(data.daily.weather_code[index])
        }
      })

      const weatherData = {
        current: {
          temp: Math.round(data.current.temperature_2m),
          condition: getWeatherCondition(data.current.weather_code),
          icon: getWeatherIcon(data.current.weather_code)
        },
        forecast: forecastArray
      }

      console.log('Processed weather data:', weatherData)
      console.log('Forecast array:', forecastArray)
      setWeatherData(weatherData)
      setLoading(false)
    } catch (err) {
      console.error('Weather API Error:', err)
      console.error('City:', cityName, 'Coords:', coords)
      setError(`Weather unavailable: ${err.message}`)
      setLoading(false)
    }
  }

  const getWeatherCondition = (weatherCode) => {
    const conditionMap = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Fog',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      71: 'Slight snow',
      73: 'Moderate snow',
      75: 'Heavy snow',
      77: 'Snow grains',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    }
    return conditionMap[weatherCode] || 'Unknown'
  }

  useEffect(() => {
    fetchWeatherData(selectedCity)
  }, [selectedCity])

  const handleCityChange = (newCity) => {
    setSelectedCity(newCity)
    if (onCityChange) {
      onCityChange(newCity)
    }
  }

  if (loading) {
    return (
      <div className={`bg-blue-900 text-white p-4 rounded ${className}`}>
        <div className="text-center">Loading weather...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`bg-blue-900 text-white p-4 rounded ${className}`}>
        <div className="text-center text-red-300">
          <div className="text-sm mb-2">Weather unavailable</div>
          <div className="text-xs opacity-70">{error}</div>
          <div className="text-xs opacity-50 mt-2">
            {error.includes('API key') ? 'Please configure weather API key' : 'Check your internet connection'}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-blue-800 text-white rounded h-full flex flex-col ${className}`}>
      {/* City Selector */}
      {showCitySelector && (
        <div className="mb-4 p-2 bg-blue-800 rounded flex-shrink-0">
          <div className="text-sm font-semibold mb-2">Select City:</div>
          <div className="grid grid-cols-2 gap-1">
            {cities.map((cityOption) => (
              <button
                key={cityOption}
                onClick={() => handleCityChange(cityOption)}
                className={`text-xs p-1 rounded ${
                  selectedCity === cityOption 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-700 text-blue-200 hover:bg-blue-600'
                }`}
              >
                {cityOption}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Current Weather */}
      <div className="flex justify-between items-start mb-4 mx-auto w-3/4 flex-shrink-0">
        <div className="text-4xl md:text-5xl lg:text-6xl">{weatherData.current.icon}</div>
        <div className="text-right">
          <div className="text-xl md:text-2xl font-bold">{weatherData.current.temp}°F</div>
          <div className="text-xs md:text-sm opacity-80 capitalize">{weatherData.current.condition}</div>
          <div className="text-xs opacity-60">{selectedCity}</div>
        </div>
      </div>

      {/* Weekly Forecast */}
      <div className="flex-1 flex flex-col min-h-0">     
        <div className="flex-1 grid grid-cols-4 gap-2 auto-rows-fr">
          {weatherData.forecast.map((day, index) => (
            <>
              <div key={`${index}-day`} className="text-left text-xs md:text-sm font-medium flex items-center">
                <span className="block md:hidden">{day.day.full}</span>
                <span className="hidden md:block lg:hidden">{day.day.short}</span>
                <span className="hidden lg:block">{day.day.full}</span>
              </div>
              <div key={`${index}-icon`} className="text-center text-base md:text-lg flex items-center justify-center">{day.icon}</div>
              <div key={`${index}-high`} className="text-center text-xs md:text-sm font-semibold flex items-center justify-center">{day.high}°</div>
              <div key={`${index}-low`} className="text-center text-xs md:text-sm font-semibold opacity-70 flex items-center justify-center">{day.low}°</div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}