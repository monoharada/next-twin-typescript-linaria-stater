import { css } from 'linaria'
import tw from 'twin.macro'
import { Logo, HumburgerButton } from '@/elements/index'
import { Menu } from '@/modules/index'
// ______________________________________________________
//
const header = css`
  ${tw`px-6 py-4 shadow`}
  background-color: #0045E4;
`
const headerContainer = css`
  ${tw`container flex flex-col mx-auto md:flex-row md:items-center md:justify-between`}
`
const headerContent = css`
  ${tw`flex items-center justify-between`}
`
// ______________________________________________________
//
export const Header = () => {
  return (
    <header className={header}>
      <div className={headerContainer}>
        <div className={headerContent}>
          <Logo />
          <HumburgerButton />
        </div>
        <Menu />
      </div>
    </header>
  )
}
