import React from 'react'
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View
} from 'react-native'

const TouchableView = props => {
  const TouchablePlatformSpecific = Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback,
  })
  return <TouchablePlatformSpecific {...props} />
}

export default TouchableView
