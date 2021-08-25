import { css } from 'linaria'
import tw from 'twin.macro'
import { MenuList } from '@/elements/index'
// ______________________________________________________
//
const menu = css`
  ${tw`flex-col hidden md:flex md:flex-row md:-mx-4`}
`
// ______________________________________________________
//
export const Menu = () => {
  return (
    <ul className={menu}>
      <MenuList href='/other' label='選ばれる理由' />
      <MenuList href='/other' label='学部・大学院' />
      <MenuList href='/other' label='授業番組表' />
    </ul>
  )
}
