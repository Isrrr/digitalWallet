import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { styles } from './styles'

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import { FadeInView } from '../../animation/FadeInView'
import { Card, CardLabel } from '../../components/card/CardLabel'
import {
  Transaction,
  TransactionLabel
} from '../../components/transaction/TransactionLabel'
import { useAppSelector } from '../../hooks'
import { Plug } from '../../components/Plug'

export const HomeScreen = () => {
  const tabBarHeight = useBottomTabBarHeight()

  const { cards } = useAppSelector(state => state.cards)
  const { transactions } = useAppSelector(state => state.transactions)

  const headRenderItem = ({ item }: { item: Card }) => <CardLabel item={item} />

  const headEmptyComponent = () => (
    <Plug style={styles.headPlug}>You haven't added any cards</Plug>
  )

  const bodyRenderItem = ({ item }: { item: Transaction }) => (
    <TransactionLabel item={item} />
  )

  const bodyEmptyComponent = () => (
    <Plug style={styles.bodyPlug}>You haven't created any transactions</Plug>
  )

  const bodyHeaderComponent = () => (
    <Text style={styles.bodyHeaderComponent}>Transactions</Text>
  )

  return (
    <FadeInView style={styles.wrapper}>
      <FlatList
        style={styles.header}
        data={cards}
        horizontal
        contentContainerStyle={!cards.length && styles.headContentContainer}
        keyExtractor={({ guid }) => guid ?? ''}
        renderItem={headRenderItem}
        ItemSeparatorComponent={() => <View style={styles.headSeparator} />}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={headEmptyComponent}
      />

      <FlatList
        data={transactions}
        keyExtractor={({ guid }) => guid ?? ''}
        contentContainerStyle={[
          { paddingBottom: tabBarHeight },
          styles.bodyContentContainer
        ]}
        renderItem={bodyRenderItem}
        ItemSeparatorComponent={() => <View style={styles.bodySeparator} />}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={bodyHeaderComponent}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={bodyEmptyComponent}
      />
    </FadeInView>
  )
}
