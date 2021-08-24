import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '@/elements/index'
// ______________________________________________________
//
storiesOf('elements/Image', module).add('default', () => (
  <Image img={'demo.jpg'} spImg={'demo_sp.jpg'} alt={'alt!!!'} />
))
