import { ImageStyle, ViewStyle } from 'react-native'

interface Styles {
  button: ({
    isIcon,
    touchble
  }: {
    isIcon: boolean
    touchble: number
  }) => ViewStyle
  delete: ImageStyle
}

export const styles: Styles = {
  button: ({ isIcon, touchble }) => ({
    minWidth: isIcon ? 0 : 80,
    borderLeftWidth: isIcon ? 0 : 2,
    borderRightWidth: isIcon ? 0 : 2,
    opacity: touchble,
    alignItems: 'center',
    borderColor: 'blue'
  }),
  delete: {
    width: 24,
    height: 24
  }
}
