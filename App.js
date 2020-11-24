/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import * as Landing from './src/pages/Landing'
import * as Landing from './src/pages/Landing'

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'


const Stack = createStackNavigator()

const App = () => {
	return (
		<>
			<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={Landing.NAME}
					component={Landing.Page}
				/>
			</Stack.Navigator>
			</NavigationContainer>
		</>
	)
}

const styles = StyleSheet.create({
})

export default App
