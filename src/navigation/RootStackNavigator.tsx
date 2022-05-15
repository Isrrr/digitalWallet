import React from 'react'

import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'

import { CardTabs } from './TabsStackNavigator'

import { CreateCardModal } from '@/modals/CreateCardModal'
import { CreateTransactionModal } from '@/modals/CreateTransactionModal'

type RootStackParamList = {
  Tabs: undefined
  CreateCard: undefined
  CreateTransaction: { cardGuid: string }
}

const Stack = createStackNavigator<RootStackParamList>()

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={CardTabs}
        options={{
          headerShown: false
        }}
      />

      <Stack.Group
        screenOptions={{
          headerShown: false,
          presentation: 'transparentModal'
        }}
      >
        <Stack.Screen name="CreateCard" component={CreateCardModal} />

        <Stack.Screen
          name="CreateTransaction"
          component={CreateTransactionModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export type CreateTransactionModalProps = StackScreenProps<
  RootStackParamList,
  'CreateTransaction'
>
