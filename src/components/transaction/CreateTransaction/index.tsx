import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

import { useAppDispatch, useAppSelector } from '@/hooks'
import { Card } from '@/components/card/CardLabel'
import { createTransaction, updateCard } from '@/store/slices'
import { uuidv4 } from '@/utils/uuidv4'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export const CreateTransaction = ({ cardGuid }: { cardGuid: string }) => {
  const [amount, setAmount] = useState('')
  const [comment, setComment] = useState('')

  const closeImage = require('@/assets/close.png')

  const navigation = useNavigation()

  const dispatch = useAppDispatch()
  const { cards } = useAppSelector(state => state.cards)

  const card: any = cards.find((item: Card) => item?.guid === cardGuid)

  const buildTransaction = ({ type }: { type: string }) => {
    if (!(+amount && comment)) {
      return
    }

    const cardAmount = +card?.amount
    let updatedCard: Card = {
      guid: '',
      name: '',
      amount: 0
    }

    if (type === '+') {
      updatedCard = { ...card, amount: cardAmount + +amount }
    }

    if (type === '-') {
      updatedCard = { ...card, amount: cardAmount - +amount }
    }

    dispatch(updateCard(updatedCard))

    dispatch(
      createTransaction({
        guid: uuidv4(),
        amount: amount,
        comment: comment,
        cardGuid: card.guid,
        type
      })
    )

    navigation.goBack()
  }

  const income = () => {
    buildTransaction({ type: '+' })
  }

  const become = () => {
    buildTransaction({ type: '-' })
  }

  return (
    <View style={styles.wrapper}>
      <Button
        style={styles.closeButton}
        icon={closeImage}
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.title}>{card?.name}</Text>

      <Input
        label="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Input label="Comment" value={comment} onChangeText={setComment} />

      <View style={styles.buttons}>
        <Button style={styles.okButton} title="income" onPress={income} />
        <Button style={styles.okButton} title="expense" onPress={become} />
      </View>
    </View>
  )
}
