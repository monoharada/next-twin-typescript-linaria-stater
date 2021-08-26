import { css } from 'linaria'
import tw from 'twin.macro'
import { MenuList } from '@/modules/index'
// ______________________________________________________
//
export const Header: React.FC = () => {
  return (
    <header
      className={css`
        ${tw`px-6 py-4 shadow`}
        background-color: #0045E4;
      `}
    >
      <div className='container flex flex-col mx-auto md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center justify-between'></div>
        <MenuList />
      </div>
    </header>
  )
}
