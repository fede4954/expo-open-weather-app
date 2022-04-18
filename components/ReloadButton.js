import { Button } from 'react-native'

export const ReloadButton = ({ reload }) => {
  return (
    <Button
      title='Reload weather data'
      onPress={reload}
    />
  )
}
