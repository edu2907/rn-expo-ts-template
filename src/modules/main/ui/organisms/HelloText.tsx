import React from 'react'
import { UIText, UIButton } from '@ui/atoms'
import { Env } from '@env'
import { View } from 'react-native'
import useMainNavigatorController from '@modules/main/navigation/useMainNavigatorController'

export default function HelloText() {
  const { navigateToSecondScreen } = useMainNavigatorController()
  const message = 'Hello World!' + ' ' + Env.APP_ENV
  return (
    <View>
      <UIText tx={message} />
      <UIButton title="Go to Second Page" onPress={navigateToSecondScreen} />
    </View>
  )
}
