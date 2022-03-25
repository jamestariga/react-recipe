import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [extend, setExtend] = useState(false)
  const style = { color: '#fff', fontSize: '2rem' }

  return (
    <>
      <nav className='flex flex-col items-center w-full h-auto'>
        <div className='flex w-full h-20 z-50 fixed overflow-hidden bg-teal-600'>
          <div className='flex flex-70 items-center pl-20'>
            <h1 className='text-3xl font-semibold text-white cursor-pointer'>
              Recipe
            </h1>
          </div>
          <div className='flex flex-30 justify-around w-full'>
            <div className='flex items-center font-bold'>
              <Link
                className='p-10 text-xl text-white lg:hidden hover:-translate-y-2'
                to='/'>
                Home
              </Link>
              <Link
                className='p-10 text-xl text-white lg:hidden hover:-translate-y-2'
                to='/recipe'>
                Recipe
              </Link>
              <Link
                className='p-10 text-xl text-white lg:hidden hover:-translate-y-2'
                to='/search'>
                Search
              </Link>
              <button
                className='bg-none border-none text-white cursor-pointer res:hidden'
                onClick={() => {
                  setExtend((curr) => !curr)
                }}>
                {extend ? (
                  <AiOutlineClose style={style} />
                ) : (
                  <AiOutlineMenu style={style} />
                )}
              </button>
            </div>
          </div>
        </div>
        {extend && (
          <div className='flex flex-col justify-center items-center w-full h-full mt-20 bg-teal-700 z-50 fixed font-bold'>
            <Link
              className='p-10 text-xl text-white res:hidden hover:-translate-y-2'
              to='/'>
              Home
            </Link>
            <Link
              className='p-10 text-xl text-white res:hidden hover:-translate-y-2'
              to='/recipe'>
              Recipe
            </Link>
            <Link
              className='p-10 text-xl text-white res:hidden hover:-translate-y-2'
              to='/search'>
              Search
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
