import { View, Text, StatusBar } from 'react-native'
import React from 'react'

import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./navigation";


const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
    <Navigation />
  </SafeAreaProvider>
  )
}

export default App