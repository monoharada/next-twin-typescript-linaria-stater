import Link from 'next/link'

import { css } from 'linaria'
import tw from 'twin.macro'
// ______________________________________________________
//
const logo = css`
  ${tw`text-xl font-bold text-white md:text-2xl`}
`
// _______________________________________________________
//
export const Logo = () => {
  return (
    <Link href='/' passHref>
      <span className={logo}> 放送大学</span>
    </Link>
  )
}
