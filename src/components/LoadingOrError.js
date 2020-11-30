import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, ActivityIndicator, Modal } from 'react-native'
import { COLOUR_FOREGROUND } from '../constants'
import { _i18n } from '../locales'

const LoadingOrErrorComponent = function ({ isValidating, error, handleOnError, children }) {
  return (
    <View style={isValidating ? [STYLES.container, STYLES.horizontal] : []}>
      {isValidating ? (
        <>
          <ActivityIndicator size="large" color={COLOUR_FOREGROUND} />
        </>
      ) : error ? (
        <Modal animationType="slide" transparent={true}>
          <View style={[STYLES.modalView]}>
            <Text>{_i18n('_conectionError')}</Text>
            <Button onPress={handleOnError} title={_i18n('_retry')} />
          </View>
        </Modal>
      ) : (
        children
      )}
    </View>
  )
}

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export { LoadingOrErrorComponent as default }
