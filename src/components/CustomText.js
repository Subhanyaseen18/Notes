import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../SplashScreen/style'

export default function CustomText({children, style,numberOfLines}) {
  return (
    <View>
      <Text style={style} numberOfLines={numberOfLines} allowFontScaling= {false}>{children}</Text>
    </View>
  )
}
