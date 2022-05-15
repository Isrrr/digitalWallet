import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 50 : 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    maxHeight: 180,
    minHeight: 180
  },
  headContentContainer: {
    flex: 1
  },
  headPlug: {
    flex: 1,
    alignSelf: 'center'
  },
  headSeparator: {
    width: 15
  },
  bodyContentContainer: {
    marginTop: 16
  },
  bodyHeaderComponent: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16
  },
  bodyPlug: {
    marginTop: 40
  },
  bodySeparator: {
    height: 15
  }
})
