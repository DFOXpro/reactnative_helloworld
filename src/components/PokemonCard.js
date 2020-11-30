import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { handleGotoScreen } from '../routes/utils'
import { CODE_NAME as PokemonInfoScreenCodeName } from '../screens/PokemonInfoScreen'

const handleGoToPokemonScreen = function (pokemon, props) {
  return () => {
    handleGotoScreen(PokemonInfoScreenCodeName, props, {
      url: pokemon.url,
      name: pokemon.name,
    })
  }
}

const PokemonCardComponent = function ({ index, pokemon, parenProps }) {
  return (
    <TouchableWithoutFeedback onPress={handleGoToPokemonScreen(pokemon, parenProps)}>
      <View
        style={[
          STYLE.card,
          STYLE[
            index % 4 === 0 || index % 4 === 3 ? 'cardBig' : 'cardSmall'
          ] /*, STYLE[index%4===0?'cardRight':'cardLeft']*/,
        ]}
      >
        <Image
          style={[STYLE.image]}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.slice(
              -3,
              -1
            )}.png`,
          }}
        />
        <Text>{pokemon.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const STYLE = StyleSheet.create({
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

export { PokemonCardComponent as default }
