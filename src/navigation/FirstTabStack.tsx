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

const FirstTabStack = () => {
  const stateNavigator = new StateNavigator([
    { key: navigatorKeys.Main.key },
    { key: navigatorKeys.Second.key, trackCrumbTrail: true },
  ])

  return (
    <NavigationHandler stateNavigator={stateNavigator}>
      <NavigationStack
        crumbStyle={from =>
          from
            ? AndroidNavigatorAnimationTypes.scale.in
            : AndroidNavigatorAnimationTypes.scale.out
        }
        unmountStyle={from =>
          from
            ? AndroidNavigatorAnimationTypes.slide.in
            : AndroidNavigatorAnimationTypes.slide.out
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
  )
}

export { FirstTabStack }
