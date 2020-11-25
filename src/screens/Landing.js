import React, { useEffect, useState } from 'react'
import { /*StyleSheet, */ View, Text, ActivityIndicator } from 'react-native'
import PokemonList from '../screens/PokemonListScreen'

const NAME = 'Da Poquémon list'

const SCREEN = function ({ navigation }) {
  return <PokemonList />
}

// const STYLE = StyleSheet.create({
// })

export { SCREEN, NAME }
