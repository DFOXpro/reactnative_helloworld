import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'
import { useFetchPokemonInfo } from '../hooks/PokemonInfoScreenHooks'

const TITLE = 'Poquéinfo'
const CODE_NAME = 'PokemonInfo'

const SCREEN = function (props) {
  const { data: result, error } = useFetchPokemonInfo(props.url)
  return (
    <View>
      {error
        ? (
          <Text>Error de conección :(</Text>
        )
        : (
          <>
            <Image
              style={[STYLE.image]}
              source={{
                uri: result?.sprites.other['official-artwork'].front_default,
              }}
            />
            <Text>Nombre: {result?.name}</Text>
            <Text>Peso: {result?.weight}</Text>
            <Text>Poderes:</Text>
            {result?.abilities.map((ability)=>(
              <>
                <Text>· {ability.ability.name}</Text>
              </>
            ))}
          </>
        )
      }
      
    </View>
  )
}

SCREEN.options = {
  topBar: {
    title: {
      text: TITLE,
    },
  }
}

SCREEN.propTypes = {
  url: PropTypes.string,
}

const STYLE = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  }
})

export { SCREEN, CODE_NAME }
