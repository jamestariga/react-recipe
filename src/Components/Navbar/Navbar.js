import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const [extend, setExtend] = useState(false)
  const style = { color: "#fff", fontSize: "2rem" }
  
  return (
    <>
      <nav className='flex flex-col items-center w-full h-20 bg-teal-500'>
        <div className='flex w-full h-20'>
          <div className='flex flex-70 items-center pl-20'>
            <h1 className='text-3xl font-semibold text-white'>Recipe</h1>
          </div>
          <div className='flex flex-30 justify-around w-full'>
            <div className='flex items-center'>
              <Link className='p-10 text-xl text-white lg:hidden' to='/'>Home</Link>
              <Link className='p-10 text-xl text-white lg:hidden' to='/recipe'>Recipe</Link>
              <Link className='p-10 text-xl text-white lg:hidden' to='/search'>Search</Link>
              <button className='bg-none border-none text-white cursor-pointer res:hidden'
                onClick={() => {
                  setExtend((curr) => !curr)
                }}
              >
                { extend ? <AiOutlineClose style={style}/> : <AiOutlineMenu style={style} /> }
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar