import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export interface Transaction {
  guid: string
  amount: string
  comment: string
  cardGuid: string
  type: string
}

export interface TransactionLabelInterface {
  [key: string]: Transaction
}

export const TransactionLabel = ({ item }: TransactionLabelInterface) => {
  return (
    <View style={styles.wrapper}>
      <Text>{item.comment}</Text>
      <Text>{item.type + ' ' + item.amount}</Text>
    </View>
  )
}
