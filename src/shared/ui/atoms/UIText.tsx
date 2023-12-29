import { StyleSheet, Text, TextStyle } from 'react-native'
import React from 'react'
import colors from '@ui/theme/colors'

export type UITextProps = {
  tx: string
  type?: 'light' | 'dark'
  style?: TextStyle
}

const UIText: React.FC<UITextProps> = function ({ tx, type = 'dark', style }) {
  const textStyle = type === 'dark' ? styles.darkText : styles.lightText
  return <Text style={[textStyle, style]}>{tx}</Text>
}

const styles = StyleSheet.create({
  lightText: { color: colors.onPrimary },
  darkText: { color: colors.text },
})

export default UIText
