import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation, CommonActions } from '@react-navigation/native'

import { styles } from './styles'

import { HomeScreen } from '@/screens/HomeScreen'
import { CardsScreen } from '@/screens/CardsScreen'
import { Button } from '@/components/Button'

const Tab = createBottomTabNavigator()

export const CardTabs = () => {
  const navigation = useNavigation()
  const closeImage = require('@/assets/close.png')

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: () => null,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        tabBarLabelStyle: {
          fontSize: 20
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          headerRight: () => (
            <Button
              style={styles.headerRightImage}
              icon={closeImage}
              onPress={() =>
                navigation.dispatch(CommonActions.navigate('CreateCard'))
              }
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}
