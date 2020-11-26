import useSWR from 'swr'

const useFetchPokemonInfo = function (url, uiStateChange) {
  return useSWR(url)
}

export { useFetchPokemonInfo }
