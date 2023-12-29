import React from 'react'
import { StateNavigator } from 'navigation'
import { NavigationHandler } from 'navigation-react'
import { NavigationStack, Scene } from 'navigation-react-native'
import AndroidNavigatorAnimationTypes from './helpers/AnimationTypes'
import navigatorKeys from './helpers/NavigatorKeys'
import { MainScene, SecondScene } from '@modules/main/navigation/scenes'
import { Platform, View } from 'react-native'

const stateNavigator = new StateNavigator(
  [
    { key: navigatorKeys.Main.key, route: '' },
    {
      key: navigatorKeys.Second.key,
      trackCrumbTrail: true,
      route: 'second',
    },
  ],
  // @ts-expect-error The class is part of NavigationReactNativeWeb only, but it wont throw error for mobile platforms
  // eslint-disable-next-line prettier/prettier
  NavigationStack.HistoryManager && new NavigationStack.HistoryManager(url => {
      const { state, data } = stateNavigator.parseLink(url)
      return stateNavigator
        .fluent()
        .navigate(navigatorKeys.Main.key)
        .navigate(state.key, data).url
    }, ''),
)

// This condition ensures app can start by other urls besides main,
// as documented in "Patching Bookmarks" section: https://grahammendick.github.io/navigation/documentation/native/web/browser-history.html
if (Platform.OS === 'web') {
  stateNavigator.start()
}

const StackNavigator = () => {
  return (
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
        renderTransition={(style, scene, key) => (
          <View
            key={key}
            style={{
              transform: `translate(${style.translate}%)`,
              opacity: style.opactity,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              overflow: 'hidden',
            }}
          >
            {scene}
          </View>
        )}
      >
        <Scene stateKey={navigatorKeys.Main.key}>
          <MainScene />
        </Scene>
        <Scene stateKey={navigatorKeys.Second.key}>
          <SecondScene />
        </Scene>
      </NavigationStack>
    </NavigationHandler>
  )
}

export { StackNavigator }
