import React from 'react'
import renderer from 'react-test-renderer'
import { Text } from '@/elements/index'
// ______________________________________________________
//
describe('elements/Text', () => {
  it('Snap Shot', () => {
    const component = renderer.create(<Text />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
