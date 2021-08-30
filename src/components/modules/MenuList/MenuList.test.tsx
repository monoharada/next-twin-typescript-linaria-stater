import React from 'react'
import renderer from 'react-test-renderer'
import { MenuList } from '@/modules/index'
// ______________________________________________________
//
describe('modules/MenuList', () => {
  it('Snap Shot', () => {
    const component = renderer.create(<MenuList />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
