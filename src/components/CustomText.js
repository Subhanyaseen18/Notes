import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../SplashScreen/style'

export default function CustomText({children, style}) {
  return (
    <View>
      <Text style={style} allowFontScaling= {false}>{children}</Text>
    </View>
  )
}
