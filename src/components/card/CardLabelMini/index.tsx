import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

import { Button } from '@/components/Button'
import { deleteCardByGuid, deleteCardTransactions } from '@/store/slices'
import { useAppDispatch } from '@/hooks'

export interface CardMini {
  guid: string
  name: string
}

export interface CardLabelMiniInterface {
  [key: string]: CardMini
}

export const CardLabelMini = ({ item }: CardLabelMiniInterface) => {
  const closeImage = require('@/assets/close.png')
  const dispatch = useAppDispatch()

  return (
    <View style={styles.wrapper}>
      <Text>{item.name}</Text>

      <Button
        icon={closeImage}
        onPress={() => {
          dispatch(deleteCardTransactions(item.guid ?? ''))
          dispatch(deleteCardByGuid(item.guid ?? ''))
        }}
      />
    </View>
  )
}
