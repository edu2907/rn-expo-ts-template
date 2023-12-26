import React from 'react'
import { StateNavigator } from 'navigation'
import { NavigationHandler } from 'navigation-react'
import { NavigationStack, Scene } from 'navigation-react-native'
import MainPage from '@modules/main/ui/pages/MainPage'
import SecondPage from '@modules/main/ui/pages/SecondPage'
import { NavigationBar } from 'navigation-react-native'
import { Platform } from 'react-native'
import AndroidNavigatorAnimationTypes from './helpers/AnimationTypes'
import navigatorKeys from './helpers/NavigatorKeys'
import { SafeAreaView } from 'react-native-safe-area-context'

const FirstTabStack = () => {
  const stateNavigator = new StateNavigator([
    { key: navigatorKeys.Main.key },
    { key: navigatorKeys.Second.key, trackCrumbTrail: true },
  ])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationHandler stateNavigator={stateNavigator}>
        <NavigationStack
          crumbStyle={from =>
            from
              ? AndroidNavigatorAnimationTypes.crumb_directions.west_in
              : AndroidNavigatorAnimationTypes.crumb_directions.west_out
          }
          unmountStyle={from =>
            from
              ? AndroidNavigatorAnimationTypes.directions.east_in
              : AndroidNavigatorAnimationTypes.directions.east_out
          }
        >
          <Scene stateKey={navigatorKeys.Main.key}>
            <NavigationBar
              title="Principal"
              barTintColor={
                Platform.OS === 'android'
                  ? 'rgba(255,255,255, 0)'
                  : 'rgb(247,247,247)'
              }
            />
            <MainPage />
          </Scene>
          <Scene stateKey={navigatorKeys.Second.key}>
            <NavigationBar
              title="Segundo"
              backTitle="bc"
              barTintColor={
                Platform.OS === 'android'
                  ? 'rgba(255,255,255, 0)'
                  : 'rgb(247,247,247)'
              }
            />
            <SecondPage />
          </Scene>
        </NavigationStack>
      </NavigationHandler>
    </SafeAreaView>
  )
}

export { FirstTabStack }
