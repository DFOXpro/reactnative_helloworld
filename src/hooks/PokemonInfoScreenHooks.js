import useSWR from 'swr'
import { MAX_API_RETRY, API_HEADER } from '../constants'

const fetcher = async url => {
  await new Promise(res => setTimeout(res, 2000))
  return fetch(url).then(res => res.json())
}

const useFetchPokemonInfo = function (pokemon, uiStateChange) {
  const { data, error, isValidating, refetch } = useSWR(pokemon.url, fetcher, {
    onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
      console.log('onErrorRetry', error)
      // Never retry on 404.
      if (error.status === 404) {
        return
      }
      // Only retry up to 10 times.
      if (retryCount >= MAX_API_RETRY) {
        return
      }
      // Retry after 5 seconds.
      setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 5000)
    },
  })
  // header
  // options{onDidMount, retryOnError, maxtry}

  return { pokemonInfo: data, error, isValidating } //, data }
  // return { data, error, isValidating, refetch }
}

export { useFetchPokemonInfo }
