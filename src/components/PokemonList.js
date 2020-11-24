import React, {useEffect, useState} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button,
	Image,
	ScrollView,
	TouchableWithoutFeedback,
	ActivityIndicator
} from 'react-native'
import { useSWRInfinite } from 'swr'
import Search from './Search'

const LIST_SIZE = 25

/**
 * @Singleton
 */
const Controller = class {
	constructor() {
		const instance = this.constructor.instance
		if (instance) return instance
		this.constructor.instance = this
	}
	fetchPokemonList(uiStateChange) {
		const fetcher = (...args) => fetch(...args).then((res) => {
			uiStateChange()
			let xhr = res.json()
			return xhr
		})
		// return dao('pokemonList', fetcher, trochaArgs)
		return useSWRInfinite(
			index => {
				console.log('index', index)
				return `https://pokeapi.co/api/v2/pokemon?offset=${index*LIST_SIZE}&limit=${LIST_SIZE}`
			},
			fetcher
		)
	}
	goToPokemon(url){
		console.log('do something')
	}
}

const rawList = function(pokemonList, myController) {
	return pokemonList.map((pokemon, index) => (
		<TouchableWithoutFeedback
			key={index}
			onPress={myController.goToPokemon(pokemon.url)}
		>
			<View style={[STYLE.card, STYLE[index%3===0?'cardBig':'cardSmall']]}>
				<Text>{pokemon.name}</Text>
				<Image
					style={[STYLE.image]}
					source={{
						uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.slice(-3, -1)}.png`,
					}}
				/>
			</View>
		</TouchableWithoutFeedback>
	))
}


const PokemonList = function({ navigation }) {
	myController = new Controller()
	let currentPage = 0
	const [loading, setLoading] = useState(true)
	
	const {
		data,
		error,
		mutate,
		size,
		setSize,
		isValidating
	} = myController.fetchPokemonList(()=> setLoading(false))
	// console.log(
	// 	'swr',
	// 	data,
	// 	error
	// )
	let pokemonList = data?.[0].results || []
	if(loading) return (
		<View style={[STYLE.container]} >
			<ActivityIndicator size='large'/>
		</View>
	)
	else return (
		<ScrollView>
			<Search placeholder='Pokémon name' />
			<View style={[STYLE.container]} >
				{rawList(pokemonList, myController)}
			</View>
			<Button
				onPress={() => setSize(size + 1)}
				title='load more'
			/>
		</ScrollView>
	)

}

const STYLE = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	card: {
		padding: 10,
		position: 'relative',
		backgroundColor: 'aquamarine',
	},
	cardBig: {
		flex: 2,
	},
	cardSmall: {
		flex: 1,
	},
	image: {
		width: 50,
		height: 50,
		position: 'absolute',
		right: 0,
		top: 0,
	},
})


export {Controller, PokemonList as default}
