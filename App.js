// React
import { useEffect, useState } from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
// Components
import { WeatherInfo } from './components/WeatherInfo'
import { UnitsPicker } from './components/UnitsPicker'
import { ReloadButton } from './components/ReloadButton'
// Expo
import { StatusBar } from 'expo-status-bar'
import * as Location from 'expo-location'
// Services
import { weatherServices } from './services/weatherServices'

export const App = () => {
  const [units, setUnits] = useState('metric')
  const [isLoading, setIsLoading] = useState(true)
  const [currentWeather, setCurrentWeather] = useState({})

  const loadLocation = async () => {
    setIsLoading(true)
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        alert('Foreground location permission not granted.')
        return
      }

      const location = await Location.getCurrentPositionAsync()
      const { latitude, longitude } = location.coords

      const response = await weatherServices.getCurrentWeather({ longitude, latitude, units })
      setCurrentWeather(response)
    } catch (e) {
      console.error('Error during loadLocation function:', e)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    loadLocation()
  }, [])

  useEffect(() => {
    loadLocation()
  }, [units])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='black' />
        <Text>Loading weather data...</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <UnitsPicker units={units} setUnits={setUnits} />
        <WeatherInfo currentWeather={currentWeather} />
        <ReloadButton reload={() => loadLocation()} />
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
