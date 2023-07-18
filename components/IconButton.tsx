/* eslint-disable prettier/prettier */
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Spacing from '../constants/Spacing'
import Colors from '../constants/Colors'

interface Props {
    style?: StyleProp<ViewStyle>
    size?: number
    color?: string 
    name: keyof typeof Ionicons.glyphMap
    onPress?: () => void
}

const IconButton:React.FC<Props> = ({style, size=24, color=Colors.text, name, onPress }) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={[{
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Spacing.borderRadius.base
      }, style]}>
          <Ionicons name={name} size={size} color={color} />
      </TouchableOpacity>
  )
}

export default IconButton