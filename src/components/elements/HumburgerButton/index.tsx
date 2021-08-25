import { css } from 'linaria'
import tw from 'twin.macro'

// ______________________________________________________
//
const button = css`
  ${tw`block text-white hover:text-gray-100 focus:text-gray-600 focus:outline-none md:hidden`}
`
const icon = css`
  ${tw`w-6 h-6 fill-current`}
`
// ______________________________________________________
//
export const HumburgerButton = () => {
  return (
    <button type='button' className={button}>
      <svg viewBox='0 0 24 24' className={icon}>
        <path d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'></path>
      </svg>
    </button>
  )
}
