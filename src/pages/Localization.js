import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import Geolocation from '@react-native-community/geolocation'


const NAME = 'Location test'
const Page = () => {
	const getLocation = async () => {
		const { status } = await Location.requestPermissionsAsync()
		if (status !== 'granted'){
			return Alert.alert('Sin permisos')
		}
		const location = await Location.getCurrentPositionAsync({})
		console.log('location', location)
	}
	useEffect(() => {getLocation()})
	return (
		<View>
		</View>
	)
}

export {NAME, Page}