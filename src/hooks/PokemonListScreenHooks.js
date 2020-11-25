import { useSWRInfinite } from 'swr'

const LIST_SIZE = 25

const useFetchPokemonList = function (uiStateChange) {
  const fetcher = (...args) =>
    fetch(...args).then(res => {
      uiStateChange()
      let xhr = res.json()
      return xhr
    })

  return useSWRInfinite((index, previousPageData) => {
    console.log('index', index)
    // reached the end
    if (previousPageData && !previousPageData.data) {
      return null
    }
    return `https://pokeapi.co/api/v2/pokemon?offset=${index * LIST_SIZE}&limit=${LIST_SIZE}`
  }, fetcher)
}

export { useFetchPokemonList }
