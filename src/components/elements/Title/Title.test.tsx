import React from 'react'
import renderer from 'react-test-renderer'
import { Title } from './'
// ______________________________________________________
//
describe('elements/Title', () => {
  it('Snap Shot', () => {
    const component = renderer.create(<Title />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
