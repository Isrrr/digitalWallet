import React from 'react'
import { Modal, KeyboardAvoidingView } from 'react-native'

import { styles } from './styles'

import { CreateTransaction } from '@/components/transaction/CreateTransaction'
import { CreateTransactionModalProps } from '@/navigation/RootStackNavigator'

export const CreateTransactionModal = ({
  route
}: CreateTransactionModalProps) => {
  const cardGuid = route?.params?.cardGuid

  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
      <Modal animationType="fade" transparent={true} visible={true}>
        <CreateTransaction cardGuid={cardGuid} />
      </Modal>
    </KeyboardAvoidingView>
  )
}
