import { PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../../components/card/CardLabel'

export const createCardAction = (state: any, action: PayloadAction<Card>) => {
  state.cards = [...state.cards, action.payload]
}

export const deleteCardByGuidAction = (
  state: any,
  action: PayloadAction<string>
) => {
  state.cards = state.cards.filter(({ guid }: Card) => guid !== action.payload)
}

export const updateCardAction = (state: any, action: PayloadAction<Card>) => {
  state.cards.map(
    (card: Card, index: number) =>
      (state.cards[index] =
        card.guid === action.payload.guid ? action.payload : card)
  )
}
