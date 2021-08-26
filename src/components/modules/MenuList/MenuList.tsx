import { TextLink } from '@/elements/index'
// ______________________________________________________
//
export const MenuList: React.FC = () => {
  return (
    <ul className='flex-col hidden md:flex md:flex-row md:-mx-4'>
      <li>
        <TextLink href={'/'} text={'選ばれる理由'} size={'medium'} />
      </li>
      <li>
        <TextLink href={'/'} text={'学部・大学院'} size={'medium'} />
      </li>
      <li>
        <TextLink href={'/'} text={'授業番組表'} size={'medium'} />
      </li>
    </ul>
  )
}
