import React from 'react'
import TabNavigator from './navigation/TabNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function AppRoot() {
  return (
    <SafeAreaProvider>
      <TabNavigator />
    </SafeAreaProvider>
  )
}
