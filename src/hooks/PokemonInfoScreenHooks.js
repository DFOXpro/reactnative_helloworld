import useSWR from 'swr'

const LIST_SIZE = 25

const useFetchPokemonInfo = function (url, uiStateChange) {
  return useSWR(url)
}

export { useFetchPokemonInfo }
