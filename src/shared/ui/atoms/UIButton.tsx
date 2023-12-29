import colors from '@ui/theme/colors'
import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native'
import UIText, { UITextProps } from './UIText'

type UIButtonProps = {
  buttonProps: TouchableHighlightProps & { href: string }
  textProps: UITextProps
}

const UIButton: React.FC<UIButtonProps> = props => {
  const defaultTextProps: UITextProps = {
    style: { textAlign: 'center' },
    type: 'light',
    tx: '',
  }

  const textProps = { ...defaultTextProps, ...props.textProps }

  return (
    <TouchableHighlight style={styles.button} {...props.buttonProps}>
      <UIText {...textProps} />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 4,
  },
})

export default UIButton
