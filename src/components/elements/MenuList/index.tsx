import Link from 'next/link'
import { css } from 'linaria'
import tw from 'twin.macro'
// ______________________________________________________
//
export type Props = {
  label: string
  href: string
}
// ______________________________________________________
//
const menuList = css`
  ${tw`my-1 text-white hover:text-blue-500 md:mx-4 md:my-0`}
`
// ______________________________________________________
//
export const MenuList: React.FC<Props> = ({ label, href }) => {
  return (
    <li>
      <Link href={href} passHref>
        <span className={menuList}>{label}</span>
      </Link>
    </li>
  )
}
