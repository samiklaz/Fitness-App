/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, ViewStyle, StyleProp, TextStyle } from 'react-native'
import React, {ReactNode} from 'react'
import Colors from '../constants/Colors'
import Spacing from '../constants/Spacing'
import FontSize from '../constants/FontSize'
import Fonts from '../constants/Fonts'

interface Props {
    style?: StyleProp<ViewStyle>
    children: ReactNode
    textStyle?: StyleProp<TextStyle>
    onPress?: () => void
}

const Button:React.FC<Props> = ({style, children, textStyle, onPress}) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={[{
            backgroundColor: Colors.accent,
            paddingHorizontal: Spacing.padding.xl,
            paddingVertical: Spacing.padding.base,
            borderRadius: Spacing.borderRadius.base,
            alignItems: "center"
        },
        style,
      ]}
    >
        <Text style={[{
            fontSize: FontSize.base,
            fontFamily: Fonts["poppins-regular"]
        }, textStyle]}>
            {children}
        </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})