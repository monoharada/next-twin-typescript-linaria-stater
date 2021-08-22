
import React from 'react'

import { Button } from '../components'

export default {
  title: 'Button',
  component: Button,
}

export const Primary = () => <Button isPrimary>Hello Button</Button>
export const Secondary = () => <Button isSecondary>Hello Button</Button>
export const Small = () => (
  <Button isSmall isPrimary>
    Hello Button
  </Button>
)