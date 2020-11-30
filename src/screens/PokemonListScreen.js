import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import { handleGotoScreen } from '../routes/utils'
import Search from '../components/Search'
import PokemonCard from '../components/PokemonCard'
import LoadingOrError from '../components/LoadingOrError'
import { useFetchPokemonList } from '../hooks/PokemonListScreenHooks'
import { _i18n } from '../locales'

const localeKeyId = 'pokemonList_'

let pokemonList = []

const handleSearch = function () {
  return searchValue => {
    console.log('search', searchValue)
  }
}

const rawList = function (data, props) {
  if (!data) {
    return
  }
  // console.log('data.length', data.length, data)
  let nonFlatArray = data.map(requestResponse => {
    if (!requestResponse) {
      return
    }
    return requestResponse.results.map((pokemon, index) => (
      <PokemonCard key={index} index={index} pokemon={pokemon} parenProps={props} />
    ))
  })
  return nonFlatArray.flat()
}
const handleOnError = function () {}

const PokemonList = function (props) {
  let currentPage = 0

  const { data, error, mutate, size, setSize, isValidating } = useFetchPokemonList()
  // console.log('swr', data, error)

  return (
    <LoadingOrError isValidating={isValidating} error={error} handleOnError={handleOnError}>
      <ScrollView>
        <Search placeholder="Pokémon name" onChange={handleSearch(data)} />
        <View style={[STYLE.container]}>{rawList(data, props)}</View>
        <Button onPress={() => setSize(size + 1)} title={_i18n('pokemonList_loadMore')} />
      </ScrollView>
    </LoadingOrError>
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
})

export { PokemonList as default }
