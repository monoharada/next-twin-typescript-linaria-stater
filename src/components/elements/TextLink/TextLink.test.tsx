import React from 'react'
import renderer from 'react-test-renderer'
import { TextLink } from '@/elements/index'
// ______________________________________________________
//
describe('elements/TextLink', () => {
  it('Snap Shot', () => {
    const component = renderer.create(<TextLink />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
