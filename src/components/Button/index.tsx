import React, { useState } from 'react'
import { Image, Pressable, Text } from 'react-native'

import { styles } from './styles'

interface ButtonInterface {
  style?: object
  title?: string
  icon?: number
  onPress(): void
}

export const Button = ({ style, title, icon, onPress }: ButtonInterface) => {
  const [touchble, setTouchable] = useState(1)

  return (
    <Pressable
      style={[
        style,
        styles.button({
          isIcon: !!icon,
          touchble: touchble
        })
      ]}
      onPress={onPress}
      onPressIn={() => setTouchable(0.4)}
      onPressOut={() => setTouchable(1)}
    >
      {title && <Text>{title}</Text>}
      {icon && <Image style={styles.delete} source={icon} />}
    </Pressable>
  )
}
