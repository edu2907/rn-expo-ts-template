import React from 'react'
import UIText from '@ui/atoms/UIText'
import { Env } from '@env'

export default function HelloText() {
  const message = 'Hello World!' + ' ' + Env.APP_ENV
  return <UIText tx={message} />
}
