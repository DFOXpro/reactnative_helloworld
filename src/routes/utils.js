import { Navigation } from 'react-native-navigation'

const handleGotoScreen = (codeName, props, passProps) =>
  Navigation.push(props.componentId, {
    component: {
      name: getScreenCodeName(codeName),
      passProps,
    },
  })

export { handleGotoScreen }
