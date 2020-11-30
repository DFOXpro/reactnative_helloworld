import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image } from 'react-native'
import LoadingOrError from '../components/LoadingOrError'
import { useFetchPokemonInfo } from '../hooks/PokemonInfoScreenHooks'
import { _i18n } from '../locales'

const localeKeyId = 'pokemonInfo_'
const TITLE = _i18n(localeKeyId + 'title')
const CODE_NAME = 'PokemonInfo'

const handleOnError = () => {}

const SCREEN = function (props) {
  console.log('props', props)
  const { pokemonInfo, error, isValidating } = useFetchPokemonInfo(props)
  // @DONE 118n: get country code
  // @todo spiner
  // @todo modal on error with try again button & cancel > spash

  return (
    <LoadingOrError isValidating={isValidating} error={error} handleOnError={handleOnError}>
      <>
        <Image
          style={[STYLE.image]}
          source={{
            uri: pokemonInfo?.sprites.other['official-artwork'].front_default,
          }}
        />
        <Text>
          {_i18n(localeKeyId + 'name')}
          {pokemonInfo?.name}
        </Text>
        <Text>
          {_i18n(localeKeyId + 'weight')}
          {pokemonInfo?.weight}
        </Text>
        <Text>{_i18n(localeKeyId + 'abilities')}</Text>
        {pokemonInfo?.abilities?.map((ability, index) => (
          <Text key={index}>· {ability.ability.name}</Text>
        ))}
      </>
    </LoadingOrError>
  )
}

SCREEN.options = function (props) {
  return {
    topBar: {
      title: {
        text: props.name || TITLE,
      },
    },
  }
}
SCREEN.propTypes = PropTypes.shape({
  url: PropTypes.string,
  name: PropTypes.string,
})

const STYLE = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})

export { SCREEN, CODE_NAME }
