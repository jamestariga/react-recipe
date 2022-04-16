import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
  const [extend, setExtend] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const style = { color: '#fff', fontSize: '2rem' }

  useEffect(() => {
    if (!isOpen) {
      document.getElementById('burger').click()
    }
  }, [isOpen])

  const navbarVariant = {
    visible: {
      height: '100%',
      overflow: 'hidden',
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    },
    hidden: {
      height: 0,
      overflow: 'hidden'
    },
    exit: {
      height: 0,
      overflow: 'hidden',
      transition: { duration: 0.5 }
    }
  }

  return (
    <>
      <nav className='flex flex-col items-center w-full h-auto'>
        <div className='flex w-full h-20 z-50 fixed overflow-hidden bg-stone-600'>
          <div className='flex flex-70 items-center pl-20'>
            <h1 className='text-3xl font-semibold text-white cursor-pointer hover:scale-[1.3] duration-300'>
              Recipe
            </h1>
          </div>
          <div className='flex flex-30 justify-around w-full'>
            <div className='flex items-center font-bold'>
              <Link
                className='p-10 text-xl text-white lg:hidden hover:scale-[1.2] duration-300'
                to='/'>
                Home
              </Link>
              <Link
                className='p-10 text-xl text-white lg:hidden hover:scale-[1.2] duration-300'
                to='/recipe'>
                Recipe
              </Link>
              <Link
                className='p-10 text-xl text-white lg:hidden hover:scale-[1.2] duration-300'
                to='/search/:type'>
                Search
              </Link>
              <button
                className='bg-none border-none text-white cursor-pointer res:hidden'
                id='burger'
                onClick={() => {
                  setExtend(!extend)
                  setIsOpen(true)
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
        <AnimatePresence>
          {extend && (
            <motion.div
              className='flex flex-col justify-center items-center w-full h-full mt-20 bg-stone-700 z-50 fixed font-bold res:hidden'
              initial='hidden'
              animate={extend ? 'visible' : 'exit'}
              exit='exit'
              variants={navbarVariant}>
              <Link
                onClick={() => {
                  setIsOpen(false)
                }}
                className='p-10 text-xl text-white res:hidden hover:scale-[1.2] duration-300'
                to='/'>
                Home
              </Link>
              <Link
                onClick={() => {
                  setIsOpen(false)
                }}
                className='p-10 text-xl text-white res:hidden hover:scale-[1.2] duration-300'
                to='/recipe'>
                Recipe
              </Link>
              <Link
                onClick={() => {
                  setIsOpen(false)
                }}
                className='p-10 text-xl text-white res:hidden hover:scale-[1.2] duration-300'
                to='/search/:type'>
                Search
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar
