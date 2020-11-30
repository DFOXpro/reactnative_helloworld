import { Trocha } from 'trocha'
import { name as appName } from '../../app.json'
import * as CONSTANTS from '../constants'

const API_ROUTES = new Trocha({
  domain: CONSTANTS.API_DOMAIN,
  alwaysUrl: true,
  routes: {
    pokemonList: 'pokemon', // ?offset=20&limit=20
    regionList: 'region',
    typeList: 'type',
  },
})

const BASE_ROUTE = `com.${appName}.`

export { BASE_ROUTE, API_ROUTES }
