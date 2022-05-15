import React from 'react'
import { Text, View, TextInput } from 'react-native'

import { styles } from './styles'

interface InputInterface {
  style?: object
  label: string
  value: string
  keyboardType?: any
  onChangeText(text: string): void
}

export const Input = ({
  style,
  label,
  value,
  keyboardType,
  onChangeText
}: InputInterface) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  )
}
