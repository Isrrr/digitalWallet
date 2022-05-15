import { createSlice } from '@reduxjs/toolkit'
import { Card } from '../../components/card/CardLabel'
import {
  createCardAction,
  deleteCardByGuidAction,
  updateCardAction
} from '../actions/card'

interface CardInterface {
  cards: Array<Card>
}

const initialState: CardInterface = {
  cards: []
}

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    createCard: createCardAction,
    deleteCardByGuid: deleteCardByGuidAction,
    updateCard: updateCardAction
  }
})

export default cardSlice.reducer
