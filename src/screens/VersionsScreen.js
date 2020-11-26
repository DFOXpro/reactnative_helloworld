import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'
// import { useFetchPokemonInfo } from '../hooks/PokemonInfoScreenHooks'

const TITLE = 'Versiones'
const CODE_NAME = 'Versions'

const SCREEN = function (props) {
  // const { data: result, error } = useFetchPokemonInfo(props.url)
  return <Text>@TODO</Text>
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

const STYLE = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})

export { SCREEN, CODE_NAME }
