import React from 'react'
import { Button, ButtonProps } from 'react-native'

type UIButtonProps = ButtonProps

const UIButton: React.FC<UIButtonProps> = props => {
  return <Button {...props} />
}

export default UIButton
