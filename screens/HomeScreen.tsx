/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import  Rating from 'react-native-easy-rating'
import React, {useState} from 'react'
import {StackScreenProps} from "@react-navigation/stack"
import { RootStackParamList } from '../types'
import {categories, user, workoutPlans, workouts} from "../data"
import AppText from '../components/AppText'
import Spacing from '../constants/Spacing'
import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'
import { TextInput } from 'react-native-gesture-handler'
import FontSize from '../constants/FontSize'
import IconButton from '../components/IconButton'
import CategoryList from '../components/CategoryList'
import SectionHeader from '../components/SectionHeader'
import Workout from '../components/Workout'


type Props = StackScreenProps<RootStackParamList, "Home">

const HomeScreen: React.FC<Props> = ({navigation: { navigate }}) => {

  const [active, setActive] = useState<number>(0)

  return (
    <SafeAreaView>
      <ScrollView style={{
        paddingHorizontal: Spacing.padding.base
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 15,
        }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
            <Image 
              source={user.profile}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
            />
          

            <View style={{
              marginLeft: Spacing.margin.base
            }}>
              <AppText>Hello, Welcome</AppText>
              <AppText style={{
                fontFamily: Fonts["poppins-semiBold"],
                textTransform: "capitalize",
                fontWeight: "bold"
              }}>{user.name}</AppText>
            </View>
        </View>

        <IconButton name="notifications" />
        </View>

        <View
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing.padding.sm,
            paddingHorizontal: Spacing.padding.base,
            borderRadius: Spacing.borderRadius.base,
            marginVertical: Spacing.margin.sm,
            marginBottom: Spacing.margin.lg,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons name='search-outline' size={24} color={Colors.text} />
          <TextInput
            placeholder='Search Workouts..'
            placeholderTextColor={Colors.text}
            style={{
              fontSize: FontSize.base,
              width: "80%",
            }}
          />
          <IconButton
            name='options-outline'
            style={{
              backgroundColor: Colors.accent,
            }}
            color={Colors.black}
          />
        </View>

        <CategoryList />
        <SectionHeader title="Featured Workouts" />

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          pagingEnabled
          snapToInterval={270 + Spacing.margin.lg}
        >
          {workouts.map((workout) => (
            <Workout
              onPress={() => navigate("PlanOverview", { workout: workout })}
              workout={workout}
              key={workout.id}
            />
          ))}
        </ScrollView>

        <SectionHeader title="Trending Plans" />

        {workoutPlans.map((plan) => (
          <TouchableOpacity style={{
            padding: Spacing.padding.sm,
            marginBottom: Spacing.margin.base,
            backgroundColor: Colors.primary,
            borderRadius: Spacing.borderRadius.base,
            flexDirection: "row"
          }} key={plan.id}>
            <Image 
              source={plan.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: Spacing.borderRadius.base
              }}
            />

            <View style={{
              marginLeft: Spacing.margin.base,
              justifyContent: "space-between"
            }}>
                <AppText 
                  style={{
                    fontFamily: Fonts["poppins-semiBold"]
                  }}
                >
                  {plan.name}
                </AppText>

                <View style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}>
                    <Ionicons 
                      name="calendar-outline"
                      sie={16}
                      color={Colors.text}
                    />
                    <AppText style={{
                      marginLeft: Spacing.margin.base
                    }}>
                      {plan.duration} | {plan.location}
                    </AppText>
                </View>

                <View style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}>
                  <Rating 
                    rating={plan.rating}
                    max={5}
                    iconWidth={20}
                    iconHeight={20}
                  />
                  <AppText style={{
                    marginLeft: Spacing.margin.sm,
                  }}>
                    {plan.rating}
                  </AppText>
                </View>
            </View>

          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})