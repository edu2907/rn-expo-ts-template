import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationBar, StatusBar } from 'navigation-react-native'
import colors from '@ui/theme/colors'
import SecondPage from '@modules/main/ui/pages/SecondPage'
import { useNavigator } from '@shared/hooks'

const backImage = require('assets/icons/arrow-left.png')

const SecondScene = () => {
  const stateNavigator = useNavigator()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationBar
        title="Segundo"
        navigationImage={backImage}
        tintColor={colors.onPrimary}
        onNavigationPress={() => stateNavigator.navigateBack(1)}
        navigationAccessibilityLabel="Previous Page"
        barTintColor={colors.primary}
        titleColor={colors.onPrimary}
      >
        <StatusBar barTintColor={colors.primary} tintStyle="light" />
      </NavigationBar>
      <SecondPage />
    </SafeAreaView>
  )
}

export default SecondScene
