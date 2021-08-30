import Link from 'next/link'
// ______________________________________________________
//
interface Props {
  size?: 'small' | 'medium' | 'large'
  href: string
  text: string
}
// ______________________________________________________
//
export const TextLink: React.FC<Props> = ({ href, text, size }) => {
  const baseLink = 'hover:underline'
  const sizeMode =
    size === 'small'
      ? 'text-blue-500'
      : size === 'medium'
      ? 'my-1 text-white hover:text-blue-500 md:mx-4 md:my-0'
      : size === 'large'
      ? 'text-2xl font-bold text-gray-700'
      : ''
  return (
    <Link href={href} passHref>
      <span className={`${sizeMode} ${baseLink}`}>{text}</span>
    </Link>
  )
}
