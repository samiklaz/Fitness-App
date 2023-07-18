/* eslint-disable prettier/prettier */
import { View, Text, StyleProp, TextStyle, TextProps } from 'react-native'
import React, {ReactNode} from 'react'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'
import FontSize from '../constants/FontSize'


type Props = {
    children: ReactNode
    style?: StyleProp<TextStyle>
} & TextProps ;

const AppText: React.FC<Props> = ({children, style, ...OtherProps }) => {

  return (
    <Text style={[{
        color: Colors.text,
        fontFamily: Fonts["poppins-regular"],
        fontSize: FontSize.base
    },
    style,
    ]} {...OtherProps}>
        {children}
    </Text>
  )
}

export default AppText