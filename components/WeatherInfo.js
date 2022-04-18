import { StyleSheet, Text, View, Image } from 'react-native'

export const WeatherInfo = ({ currentWeather }) => {
  const { name, temp, feelsLike, weather, icon } = currentWeather

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }} />

      <Text>{weather}</Text>

      <Text style={styles.temp}>{temp}º</Text>
      <Text>Feels like {feelsLike}º</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  weatherIcon: {
    width: 100,
    height: 100
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  temp: {
    fontSize: 35
  }
})
