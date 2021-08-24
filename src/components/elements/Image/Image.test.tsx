import React from 'react'
import renderer from 'react-test-renderer'
import { Image } from '@/elements/index'
// ______________________________________________________
//
describe('elements/Image', () => {
  it('Snap Shot', () => {
    const component = renderer.create(<Image img={'demo.jpg'} alt={'sb alt'} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
