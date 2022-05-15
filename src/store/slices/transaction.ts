import { createSlice } from '@reduxjs/toolkit'
import { Transaction } from '../../components/transaction/TransactionLabel'
import {
  createTransactionAction,
  deleteCardTransactionsAction
} from '../actions/transaction'

interface TransactionInterface {
  transactions: Array<Transaction>
}

const initialState: TransactionInterface = {
  transactions: []
}

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    createTransaction: createTransactionAction,
    deleteCardTransactions: deleteCardTransactionsAction
  }
})

export default transactionSlice.reducer
