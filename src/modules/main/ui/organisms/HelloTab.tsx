import React from 'react'
import { UIText } from '@ui/atoms'
import { View } from 'react-native'

export default function HelloText() {
  const message = 'Second Tab Page'
  return (
    <View>
      <UIText tx={message} />
    </View>
  )
}
