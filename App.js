import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Landing from './src/screens/Landing'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Landing.NAME} component={Landing.SCREEN} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
