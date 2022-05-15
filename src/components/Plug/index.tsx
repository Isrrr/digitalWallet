import React from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

interface PlugInterface {
  style?: object
  children?: string
}

export const Plug = ({ style, children }: PlugInterface) => (
  <Text style={[style, styles.plug]}>{children}</Text>
)
