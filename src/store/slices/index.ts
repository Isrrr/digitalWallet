import { cardSlice } from './card'
import { transactionSlice } from './transaction'

export const { createTransaction, deleteCardTransactions } =
  transactionSlice.actions

export const { createCard, deleteCardByGuid, updateCard } = cardSlice.actions
