import { css } from 'linaria'
import tw from 'twin.macro'
import { Button, Image } from '@/elements/index'
import Link from 'next/link'

const Index: React.FC = () => {
  return (
    <div className='App'>
      <h1>Next.js + twin.macro + Linaria</h1>
      <div
        className={css`
          ${tw`mt-[50px] md:bg-gray-500 sm:bg-pink-500 border border-solid border-purple-900 p-6 font-bold`}
        `}
      >
        I am styled with twin.macro + Linaria
        <Link href='/other' passHref>
          <span className='cursor-pointer'>
            <Button>Go to other page</Button>
          </span>
        </Link>
        <div className={'relative'}>
          <Image img={'demo.jpg'} alt='image dummy' />
        </div>
      </div>
    </div>
  )
}
export default Index
