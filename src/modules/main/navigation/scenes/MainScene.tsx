import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationBar, StatusBar } from 'navigation-react-native'
import colors from '@ui/theme/colors'
import MainPage from '../../ui/pages/MainPage'

const MainScene = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationBar
        title="Principal"
        barTintColor={colors.primary}
        titleColor={colors.onPrimary}
      >
        <StatusBar barTintColor={colors.primary} tintStyle="light" />
      </NavigationBar>
      <MainPage />
    </SafeAreaView>
  )
}

export default MainScene
