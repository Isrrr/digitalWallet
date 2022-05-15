import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

import { CommonActions, useNavigation } from '@react-navigation/native'
import { Button } from '@/components/Button'

export type Card = {
  guid: string
  name: string
  amount: number
}

export interface CardInterface {
  [key: string]: Card
}

export const CardLabel = ({ item }: CardInterface) => {
  const navigation = useNavigation()

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{item.name}</Text>

      <Text style={styles.amount}>{'$' + item.amount}</Text>
      <Button
        style={styles.process}
        title="Process"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate('CreateTransaction', { cardGuid: item.guid })
          )
        }
      />
    </View>
  )
}
