import { Trocha } from 'trocha'
const API_ROUTES = new Trocha({
  domain: 'https://pokeapi.co/api/v2/',
  alwaysUrl: true,
  routes: {
    pokemonList: 'pokemon', // ?offset=20&limit=20
    regionList: 'region',
    typeList: 'type',
  },
})

export { API_ROUTES }
