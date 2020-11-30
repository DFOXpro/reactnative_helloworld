import React, { useEffect, useState } from 'react'
// import { /*StyleSheet, */ View, Text, ActivityIndicator } from 'react-native'
import PokemonList from '../screens/PokemonListScreen'
import { _i18n } from '../locales'

const localeKeyId = 'pokemonList_'
const TITLE = _i18n(localeKeyId + 'title')
const CODE_NAME = 'Landing'

const SCREEN = function (props) {
  return <PokemonList {...props} />
}

SCREEN.options = {
  topBar: {
    title: {
      text: TITLE,
    },
  },
  bottomTab: {
    text: TITLE,
  },
}

// const STYLE = StyleSheet.create({
// })

export { SCREEN, CODE_NAME }
