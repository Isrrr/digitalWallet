import React, { ReactNode, useRef } from 'react'
import { Animated } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'

type FadeInViewInterface = {
  style?: object
  children: ReactNode
}

export const FadeInView = (props: FadeInViewInterface) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()

    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true
      }).start()
    }
  })

  const animated = {
    flex: 1,
    opacity: fadeAnim
  }

  return (
    <Animated.View style={[animated, props.style]}>
      {props.children}
    </Animated.View>
  )
}
