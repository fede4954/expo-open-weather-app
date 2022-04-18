import { Picker } from '@react-native-picker/picker'
import { StyleSheet, View, Text } from 'react-native'

export const UnitsPicker = ({ units, setUnits }) => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={units}
        onValueChange={(selectedItem) =>
          setUnits(selectedItem)}
      >
        <Picker.Item label='Cº' value='metric' />
        <Picker.Item label='Fº' value='imperial' />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  picker: {
    width: '50%'
  }
})
