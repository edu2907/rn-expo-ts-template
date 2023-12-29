import React from 'react'
import { UIText, UIButton } from '@ui/atoms'
import { Env } from '@env'
import { View } from 'react-native'
import useMainNavigatorController from '@modules/main/navigation/useMainNavigatorController'

export default function HelloText() {
  const { secondScreen } = useMainNavigatorController()
  const message = 'Hello World!' + ' ' + Env.APP_ENV
  return (
    <View>
      <UIText tx={message} />
      <UIButton
        buttonProps={{
          href: secondScreen.href,
          onPress: secondScreen.navigate,
        }}
        textProps={{ tx: 'Go to Second Page' }}
      />
    </View>
  )
}
