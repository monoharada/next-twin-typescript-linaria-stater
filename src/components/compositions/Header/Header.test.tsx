import React from 'react'
import renderer from 'react-test-renderer'
import { Header } from '@/compositions/index'
// ______________________________________________________
//
describe('compositions/Header', () => {
  it('Snap Shot', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
