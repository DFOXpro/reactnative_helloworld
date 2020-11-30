import { useSWRInfinite } from 'swr'
import { API_ROUTES } from '../routes/constants'

const LIST_SIZE = 30

const useFetchPokemonList = function (uiStateChange) {
  const fetcher = (...args) =>
    fetch(...args).then(res => {
      if (uiStateChange) {
        uiStateChange()
      }
      let xhr = res.json()
      // console.log('fetcher', xhr)
      return xhr
    })

  return useSWRInfinite((index, previousPageData) => {
    // console.log('index', index)
    // reached the end
    if (previousPageData && !previousPageData.data) {
      return null
    }
    return API_ROUTES.pokemonList.path({
      query: { offset: index * LIST_SIZE, limit: LIST_SIZE },
    })
    //`https://pokeapi.co/api/v2/pokemon?offset=${index * LIST_SIZE}&limit=${LIST_SIZE}`
  }, fetcher)
}

export { useFetchPokemonList }
