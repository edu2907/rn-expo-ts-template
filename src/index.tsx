import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StackNavigator } from '@navigation/StackNavigator'

export default function AppRoot() {
  return (
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  )
}
