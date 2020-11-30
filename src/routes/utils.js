import { Navigation } from 'react-native-navigation'
import { BASE_ROUTE } from './constants'

const getScreenCodeName = codeName => BASE_ROUTE + codeName

const handleGotoScreen = (codeName, props, passProps) =>
  Navigation.push(props.componentId, {
    component: {
      name: getScreenCodeName(codeName),
      passProps,
    },
  })

export { handleGotoScreen, getScreenCodeName }
