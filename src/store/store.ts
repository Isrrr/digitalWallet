import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './slices/card'
import transactionReducer from './slices/transaction'

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    transactions: transactionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
