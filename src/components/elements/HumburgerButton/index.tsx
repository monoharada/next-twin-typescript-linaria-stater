export const HumburgerButton = () => {
  return (
    <button
      type='button'
      className='block text-white hover:text-gray-100 focus:text-gray-600 focus:outline-none md:hidden'
    >
      <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
        <path d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'></path>
      </svg>
    </button>
  )
}
