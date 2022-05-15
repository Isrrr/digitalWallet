import React from 'react'
import { View, FlatList } from 'react-native'

import { styles } from './styles'

import { FadeInView } from '@/animation/FadeInView'
import { CardMini, CardLabelMini } from '@/components/card/CardLabelMini'
import { useAppSelector } from '@/hooks'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { Plug } from '@/components/Plug'

export const CardsScreen = () => {
  const tabBarHeight = useBottomTabBarHeight()
  const { cards } = useAppSelector(state => state.cards)

  const paddingBottom = {
    paddingBottom: tabBarHeight
  }

  const renderItem = ({ item }: { item: CardMini }) => (
    <CardLabelMini item={item} />
  )

  const separator = () => <View style={styles.separator} />

  const listEmptyComponent = () => (
    <Plug style={styles.plug}>Add your card here!</Plug>
  )

  return (
    <FadeInView>
      <FlatList
        data={cards}
        contentContainerStyle={[styles.contentContainer, paddingBottom]}
        keyExtractor={({ guid }) => guid ?? ''}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
        ListEmptyComponent={listEmptyComponent}
      />
    </FadeInView>
  )
}
