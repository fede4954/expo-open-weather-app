import { WEATHER_API_KEY } from '@env'
const baseWeatherURL = 'https://api.openweathermap.org/data/2.5'

const getCurrentWeather = async ({ latitude, longitude, units }) => {
  try {
    const requestURL = `${baseWeatherURL}/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${WEATHER_API_KEY}`
    const response = await fetch(requestURL)
    const result = await response.json()
    return {
      name: result.name,
      temp: result.main.temp,
      feelsLike: result.main.feels_like,
      weather: result.weather[0].main,
      icon: result.weather[0].icon
    }
  } catch (e) {
    console.error('Error getting weather:', e)
  }
}

export const weatherServices = {
  getCurrentWeather
}
