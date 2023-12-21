import { Text } from 'react-native'
import React from 'react'

export type UITextProps = {
  tx: string
}

const UIText: React.FC<UITextProps> = function ({ tx }) {
  return <Text>{tx}</Text>
}

export default UIText
