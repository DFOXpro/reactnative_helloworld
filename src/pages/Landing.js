import React, {useEffect, useState} from 'react'
import { /*StyleSheet, */View, Text, ActivityIndicator } from 'react-native'
import PokemonList from '../components/PokemonList'

const NAME = 'Da Poquémon list'

/**
 * @Singleton
 */
const Controller = class {
	constructor() {
		const instance = this.constructor.instance
		if (instance) return instance
		this.constructor.instance = this
	}
}

const Page = function({ navigation }) {
	return (
		<View>
			<PokemonList />
		</View>
	)
}

// const STYLE = StyleSheet.create({
// })

export {Controller, Page, NAME}
