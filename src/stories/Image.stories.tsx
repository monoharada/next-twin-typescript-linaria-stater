import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '../components/elements/Image/Image'
import { demo, demo_sp } from '@/lib/imageIndex'
// ______________________________________________________
//
storiesOf('elements/Image', module).add('default', () => (
  <Image img={demo} spImg={demo_sp} alt={'alt!!!'} />
))
