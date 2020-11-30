import { Navigation } from 'react-native-navigation'
import { BASE_ROUTE, API_ROUTES } from './constants'
import { getScreenCodeName } from './utils'
import * as CONSTANTS from '../constants'
import * as Landing from '../screens/Landing'
import * as PokemonInfo from '../screens/PokemonInfoScreen'
import * as Versions from '../screens/VersionsScreen'

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
                    icon: require('../assets/digimon.png'),
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
                    icon: require('../assets/digimonDevice.png'),
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

export { initRoutesEngine }
