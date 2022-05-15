import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'

import { styles } from './styles'

import { useNavigation } from '@react-navigation/native'
import { createCard } from '@/store/slices'
import { uuidv4 } from '@/utils/uuidv4'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export const CreateCard = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const closeImage = require('@/assets/close.png')

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const onPress = () => {
    if (name && +amount) {
      dispatch(createCard({ guid: uuidv4(), name: name, amount: +amount }))
      navigation.goBack()
    }
  }

  return (
    <View style={styles.wrapper}>
      <Button
        style={styles.closeButton}
        icon={closeImage}
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.title}>New Card</Text>

      <Input label="Name" value={name} onChangeText={setName} />

      <Input
        label="Initial Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Button style={styles.okButton} title="OK" onPress={onPress} />
    </View>
  )
}
