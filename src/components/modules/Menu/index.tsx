import Link from 'next/link'

export const Menu = () => {
  return (
    <ul className='flex-col hidden md:flex md:flex-row md:-mx-4'>
      <li>
        <Link href='/other' passHref>
          <span className='my-1 text-white hover:text-blue-500 md:mx-4 md:my-0'>
            選ばれる理由
          </span>
        </Link>
      </li>
      <li>
        <Link href='/other' passHref>
          <span className='my-1 text-white hover:text-blue-500 md:mx-4 md:my-0'>
            学部・大学院
          </span>
        </Link>
      </li>
      <li>
        <Link href='/other' passHref>
          <span className='my-1 text-white hover:text-blue-500 md:mx-4 md:my-0'>
            授業番組表
          </span>
        </Link>
      </li>
    </ul>
  )
}
