import type { ReactNode } from 'react'
import React, { useState, useEffect } from 'react'
import {
  StatusBar,
  useColorScheme,
  View,
  Linking,
  Platform
} from 'react-native'
import { Provider } from 'react-redux'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import { NavigationContainer } from '@react-navigation/native'

import { store } from './store/store'
import { RootStack } from './navigation/RootStackNavigator'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { PERSISTENCE_KEY } from './constants'

const App: () => ReactNode = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  const [isReady, setIsReady] = useState(false)
  const [initialState, setInitialState] = useState()

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL()

        if (Platform.OS !== 'web' && initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY)
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } finally {
        setIsReady(true)
      }
    }

    if (!isReady) {
      restoreState()
    }
  }, [isReady])

  if (!isReady) {
    return null
  }

  return (
    <Provider store={store}>
      <View style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer
          initialState={initialState}
          onStateChange={state =>
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
          }
        >
          <RootStack />
        </NavigationContainer>
      </View>
    </Provider>
  )
}

export default App
