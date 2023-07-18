/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {StackScreenProps} from "@react-navigation/stack"
import FontSize from '../constants/FontSize';
import Spacing from '../constants/Spacing';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Button from '../components/Button';
import {RootStackParamList} from "../types"


type Props = StackScreenProps<RootStackParamList, "OnBoarding">

const OnBoardingScreen: React.FC<Props> = ({navigation: {navigate}}) => {
  const {height} = Dimensions.get('window')

  const handlePress = () => navigate("Home")
  return (
    <ImageBackground 
      source={require("../assets/images/onboarding.jpeg")}
      style={{
        flex: 1,
        justifyContent: "flex-end"
      }}
    >
      <LinearGradient style={{
        height: height / 2.5,
        paddingHorizontal: Spacing.padding.lg, 
      }} colors={['rgba(0, 0, 0, 0.1)', '#000']}>

          <Text style={{ 
            fontSize: FontSize.xxl,
            color: Colors.text,
            fontFamily: Fonts["poppins-semiBold"],
            textAlign: "center"
          }}>
            Stay health even if you stay at home
          </Text>

          <Text style={{ 
            fontSize: FontSize.sm,
            color: Colors.text,
            fontFamily: Fonts["poppins-regular"],
            textAlign: "center",
            marginTop: Spacing.margin.base,
            marginBottom: Spacing.margin.xxl,
          }}>
            Staying fit to keep you in good condition can now go through mobile apps
          </Text>

          <Button onPress={handlePress}>Get Started</Button>


      </LinearGradient>

    </ImageBackground>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({})