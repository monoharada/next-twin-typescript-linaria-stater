import useMedia from 'use-media'
// import img from '@/images/demo.jpg';
import { Image, Button } from '@/elements/index'
import Link from 'next/link'

const Demo = () => {
  const isWide = useMedia({ minWidth: '1000px' })
  return (
    <div>
      Screen is wide: {isWide ? '😃' : '😢'}
      <Link href='/' passHref>
        <span className='cursor-pointer'>
          <Button>Back to Home</Button>
        </span>
      </Link>
      <p>
        ↓↓　Responsive image with picture element. automatic dimensions insert
      </p>
      <Image img={'demo_sp.jpg'} spImg={'demo.jpg'} alt={'alt!!!'} />
    </div>
  )
}
export default Demo
