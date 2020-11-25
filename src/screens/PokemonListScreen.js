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
import Search from '../components/Search'
import { useFetchPokemonList } from '../hooks/PokemonListScreenHooks'

const handleGoToPokemonScreen = function(url) {
	return ()=> {
		console.log('go to', url)
	}
}
const handleSearch = function(pokemonList) {
	return (searchValue)=> {
		console.log('search', searchValue)
	}
}

const rawList = function(data) {
	if(!data) return
	console.log('data.length', data.length)
	let nonFlatArray = data.map((requestResponse) => {
		if(!requestResponse) return
		return requestResponse.results.map((pokemon, index) => (
			<TouchableWithoutFeedback
				key={index}
				onPress={handleGoToPokemonScreen(pokemon.url)}
			>
				<View style={[STYLE.card, STYLE[(index%4===0)||(index%4===3)?'cardBig':'cardSmall']/*, STYLE[index%4===0?'cardRight':'cardLeft']*/]}>
					<Image
						style={[STYLE.image]}
						source={{
							uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.slice(-3, -1)}.png`,
						}}
					/>
					<Text>{pokemon.name}</Text>
				</View>
			</TouchableWithoutFeedback>
		))}
	)
	return nonFlatArray.flat()
}

let loading = true
const PokemonList = function({ navigation }) {
	let
		currentPage = 0
	
	const {
		data,
		error,
		mutate,
		size,
		setSize,
		isValidating
	} = useFetchPokemonList(()=> loading = false)
	// console.log(
	// 	'swr',
	// 	data,
	// 	error
	// )

	return (
		loading
		? <View style={[STYLE.container]} >
			<ActivityIndicator size='large'/>
		</View>
		: <ScrollView>
				<Search
					placeholder='Pokémon name'
					onChange={handleSearch(data)}
				/>
				<View style={[STYLE.container]} >
					{rawList(data)}
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
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		alignContent: 'flex-start',
		flexWrap: 'wrap',
		flexGrow: 0,
		flexShrink: 0,
	},
	card: {
		flex: 1,
		height: 100,
		padding: 10,
		position: 'relative',
		backgroundColor: 'aquamarine',
		flexGrow: 0,
		flexShrink: 0,
	},
	cardBig: {
		minWidth: '60%',
		backgroundColor: 'beige',
	},
	cardSmall: {
		minWidth: '40%',
	},
	cardLeft: {},
	cardRight: {},
	image: {
		width: 100,
		height: 100,
		position: 'absolute',
		right: 0,
		top: 0,
	},
})


export {PokemonList as default}
