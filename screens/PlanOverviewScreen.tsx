/* eslint-disable prettier/prettier */
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { BlurView } from "@react-native-community/blur";
import AppText from "../components/AppText";
import IconButton from "../components/IconButton";
import Spacing from "../constants/Spacing";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import Font from "../constants/Font";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Ionicons  from "react-native-vector-icons/Ionicons"
import LinearGradient from 'react-native-linear-gradient';
import Button from "../components/Button";
import Screen from "../components/Screeen";
import Fonts from "../constants/Fonts";
import { exercises } from "../data";

type Props = StackScreenProps<RootStackParamList, "PlanOverview">

const PlanOverviewScreen: React.FC<Props> = ({route, navigation: { goBack}}) => {
  const workout = route.params.workout
  return (
    <Screen>
      <ScrollView style={{
        paddingHorizontal: Spacing.padding.base,
        marginBottom: Spacing.padding.xxl * 2
      }}>
        <View style={{
          alignItems: "center",
          paddingVertical: Spacing.padding.base,
          justifyContent: "center"
        }}>
          <IconButton 
            onPress={() => goBack()}
            style={{
              position: "absolute",
              left: 0
            }}
            name="chevron-back"
          />
          <AppText>Plan Overview</AppText>
        </View>

        <ImageBackground source={workout.image} style={{
          height: 250,
          marginVertical: Spacing.borderRadius.base,
          overflow: "hidden",
          justifyContent: "space-between",
          paddingVertical: Spacing.padding.base,
        }}>
          <View style={{
            paddingHorizontal: Spacing.padding.base,
            alignItems: "flex-end"
          }}>
            <IconButton 
              name="bookmark-outline"
              style={{
                backgroundColor: Colors.primary,
                borderWidth: 0,
              }}
            />
          </View>

          <View style={{
            borderRadius: Spacing.borderRadius.base,
            overflow: "hidden",
            marginHorizontal: Spacing.margin.lg,
            backgroundColor: "rgba(12, 0, 14, 0.50)"
          }}>
            <View 
              style={{
                padding: Spacing.padding.base,
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
              }}>
                <AppText style={{
                  fontFamily: Fonts["poppins-semiBold"],
                  color: Colors.accent,
                  marginRight: Spacing.margin.base,
                }}>
                  {workout.minutes}
                </AppText>

                <AppText style={{ fontSize: FontSize.sm,}}>miutes</AppText>
              </View>

              <View style={{
                flexDirection: "row",
                alignItems: 'center'
              }}>
                <AppText style={{
                  fontFamily: Fonts["poppins-semiBold"],
                  color: Colors.accent,
                  marginRight: Spacing.margin.base
                }}>
                  {workout.calories}
                </AppText>

                <AppText style={{
                  fontSize: FontSize.sm
                }}>calories</AppText>
              </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center"
              }}>
                <AppText style={{
                  fontFamily: Fonts["poppins-semiBold"],
                  color: Colors.accent,
                  marginRight: Spacing.margin.base,
                }}>
                  {workout.exercises.length}
                </AppText>
                <AppText
                  style={{
                    fontSize: FontSize.sm,
                  }}
                >
                  exercises
                </AppText>
              </View>


            </View>
          </View>
        </ImageBackground>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <AppText style={{
            fontSize: FontSize.lg,
            fontFamily: Fonts["poppins-semiBold"]
          }}>
            {workout.name}
          </AppText>

          <View style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
            <Ionicons name="star" size={20} color={Colors.yellow} />
            <AppText style={{
              marginLeft: Spacing.margin.sm
            }}>
              {workout.rating}
            </AppText>
          </View>
        </View>

        <AppText
          style={{
            marginTop: Spacing.margin.sm,
          }}
        >
          {workout.coach}
        </AppText>
        <AppText
          style={{
            marginTop: Spacing.margin.base,
            fontFamily: Fonts["poppins-semiBold"],
          }}
        >
          Description
        </AppText>

        <AppText numberOfLines={3} style={{
          marginTop: Spacing.margin.sm,
          fontFamily: Fonts["poppins-regular"]
        }}>
          {workout.description}
        </AppText>

        <AppText style={{
          marginVertical: Spacing.margin.base,
          fontFamily: Fonts["poppins-semiBold"]
        }}>
          Exercises ({workout.exercises.length})
        </AppText>

        {workout.exercises.map((exercise) => (
          <TouchableOpacity style={{
            backgroundColor: Colors.primary,
            borderRadius: Spacing.borderRadius.base,
            marginBottom: Spacing.margin.lg,
            padding: Spacing.padding.base,
            flexDirection: "row"
          }} key={exercise.id}>

            <Image 
              source={exercise.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: Spacing.borderRadius.base,
              }}
            />

            <View style={{
              marginLeft: Spacing.margin.base,
              justifyContent: "space-between"
            }}>
              <AppText style={{
                fontFamily: Fonts["poppins-semiBold"]
              }}>
                {exercise.name}
              </AppText>

              <View style={{
                flexDirection: "row",
                alignItems: "center"
              }}>
                <Ionicons name="time-outline" sie={16} color={Colors.text}  />
                <AppText style={{
                  fontFamily: Fonts["poppins-regular"],
                  marginLeft: Spacing.margin.sm
                }}>
                  {exercise.time} /{exercise.set} set
                </AppText>
              </View>

              <View style={{
                flexDirection: "row",
                alignItems: "center"
              }}>
                <Ionicons name="play" size={16} color={Colors.accent} />
                <AppText style={{
                  fontFamily: Fonts["poppins-regular"],
                  marginLeft: Spacing.margin.sm,
                }}>Play</AppText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <LinearGradient
        style={{
          position: "absolute",
          width: "100%",
          paddingBottom: Spacing.padding.xxl,
          paddingTop: Spacing.padding.sm,
          bottom: 0,
          paddingHorizontal: Spacing.padding.base,
        }}
        colors={[`rgba(0,0,0,0)`, "black"]}
      >
        <Button>Start Workout</Button>
      </LinearGradient>

    </Screen>
  )
}

export default PlanOverviewScreen

const styles = StyleSheet.create({})