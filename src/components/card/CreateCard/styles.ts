import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    marginTop: '20%',
    width: 250,
    height: 280,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    alignSelf: 'flex-end'
  },
  title: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '700'
  },
  okButton: {
    marginTop: 20
  }
})
