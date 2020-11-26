import { Trocha } from 'trocha'

import { name as appName } from '../app.json'
import { Navigation } from 'react-native-navigation'
import * as CONSTANTS from './constants'
import * as Landing from './screens/Landing'
import * as PokemonInfo from './screens/PokemonInfoScreen'
import * as Versions from './screens/VersionsScreen'

const API_ROUTES = new Trocha({
  domain: CONSTANTS.API_DOMAIN,
  alwaysUrl: true,
  routes: {
    pokemonList: 'pokemon', // ?offset=20&limit=20
    regionList: 'region',
    typeList: 'type',
  },
})

const _BASE_ROUTE = `com.${appName}.`
const getScreenCodeName = codeName => _BASE_ROUTE + codeName

const handleGotoScreen = (codeName, props, passProps) =>
  Navigation.push(props.componentId, {
    component: {
      name: getScreenCodeName(codeName),
      passProps,
    },
  })

const initRoutesEngine = function () {
  const rootScreenName = getScreenCodeName(Landing.CODE_NAME)
  // const pokemonInfoStack = {
  //   component: {
  //     name: getScreenCodeName(PokemonInfoScreen.CODE_NAME),
  //   },
  // }
  let screens = [Landing, PokemonInfo, Versions].forEach(item =>
    Navigation.registerComponent(getScreenCodeName(item.CODE_NAME), () => item.SCREEN)
  )
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: getScreenCodeName(Landing.CODE_NAME),
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('./assets/digimon.png'),
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: getScreenCodeName(Versions.CODE_NAME),
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('./assets/digimonDevice.png'),
                  },
                },
              },
            },
          ],
        },
      },
    })
  })

  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: CONSTANTS.COLOUR_A,
      style: 'dark',
    },
    topBar: {
      title: {
        color: CONSTANTS.COLOUR_FOREGROUND,
        fontWeight: 'bold',
      },
      backButton: {
        color: CONSTANTS.COLOUR_FOREGROUND,
      },
      background: {
        color: CONSTANTS.COLOUR_A,
      },
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14,
    },
  })
}

export { API_ROUTES, initRoutesEngine, handleGotoScreen }
