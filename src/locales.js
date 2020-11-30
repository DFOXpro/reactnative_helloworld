import { NativeModules, Platform } from 'react-native'

const DEFAULT_LANGUAGE = 'en'
const LOCALE_KEY_LIST = {
  en: {
    pokemonList_title: 'Pocket monsters',
    pokemonList_loadMore: 'load more',
    pokemonInfo_title: 'Pocket monster dex',
    versions_title: 'Game Versions',
    _conectionError: 'Connection error :(',
    _retry: 'Retry',
    pokemonInfo_name: 'Name: ',
    pokemonInfo_weight: 'Weight: ',
    pokemonInfo_abilities: 'Powers: ',
  },
  es: {
    pokemonList_title: 'Poquémones',
    pokemonList_loadMore: 'cargar más',
    pokemonInfo_title: 'Poquéinfo',
    versions_title: 'Versiones del juego',
    _conectionError: 'Error de conección :(',
    _retry: 'Reintentar',
    pokemonInfo_name: 'Nombre: ',
    pokemonInfo_weight: 'Peso: ',
    pokemonInfo_abilities: 'Poderes: ',
  },
  fr: {
    pokemonList_title: 'Le Poquémones',
    pokemonList_loadMore: 'Le cargar más',
    pokemonInfo_title: 'Le Poquéinfo',
    versions_title: 'Le Versiones del juego',
    _conectionError: 'Le Error de conección :(',
    _retry: 'Le Reintentar',
    pokemonInfo_name: 'Le Nombre: ',
    pokemonInfo_weight: 'Le Peso: ',
    pokemonInfo_abilities: 'Le Poderes: ',
  },
}

let language_key
const setLanguageKey = function () {
  let deviceLanguage =
    (Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier) || DEFAULT_LANGUAGE
  deviceLanguage = deviceLanguage.slice(0, 2)
  if (Object.keys(LOCALE_KEY_LIST).includes(deviceLanguage)) {
    language_key = deviceLanguage
  } else {
    language_key = DEFAULT_LANGUAGE
  }
}

const _i18n = function (key) {
  if (!language_key) {
    setLanguageKey()
  }
  return LOCALE_KEY_LIST[language_key][key]
}

export { _i18n }
