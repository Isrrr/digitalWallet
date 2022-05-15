import React from 'react'
import { Modal, KeyboardAvoidingView } from 'react-native'

import { styles } from './styles'

import { CreateCard } from '@/components/card/CreateCard'

export const CreateCardModal = () => {
  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
      <Modal animationType="fade" transparent={true} visible={true}>
        <CreateCard />
      </Modal>
    </KeyboardAvoidingView>
  )
}
