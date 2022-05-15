import { PayloadAction } from '@reduxjs/toolkit'
import { Transaction } from '../../components/transaction/TransactionLabel'

export const createTransactionAction = (
  state: any,
  action: PayloadAction<Transaction>
) => {
  state.transactions = [...state.transactions, action.payload]
}

export const deleteCardTransactionsAction = (
  state: any,
  action: PayloadAction<string>
) => {
  state.transactions = state.transactions.filter(
    ({ cardGuid }: Transaction) => cardGuid !== action.payload
  )
}
