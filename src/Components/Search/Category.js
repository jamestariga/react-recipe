import { NavLink } from 'react-router-dom'
import { FaPizzaSlice, FaHamburger, FaGlobeEurope } from 'react-icons/fa'
import { GiChopsticks } from 'react-icons/gi'
import { SiFoodpanda } from 'react-icons/si'
import { IconContext } from 'react-icons/lib'

const Category = () => {
  return (
    <>
      <IconContext.Provider
        value={{ color: '#000', size: '35px', margin: 'auto' }}>
        <div className='flex justify-center items-center flex-wrap w-full p-5 mb-20 px-20 md:mb-4 md:px-10 sm:px-8 font-bold'>
          <div className='flex justify-center items-center m-4 text-center'>
            <NavLink to={'/search/american'}>
              <FaHamburger />
              <h4>American</h4>
            </NavLink>
          </div>
          <div className='m-4'>
            <NavLink to={'/search/chinese'}>
              <SiFoodpanda />
              <h4>Chinese</h4>
            </NavLink>
          </div>
          <div className='m-4'>
            <NavLink to={'/search/korean'}>
              <GiChopsticks />
              <h4>Korean</h4>
            </NavLink>
          </div>
          <div className='m-4'>
            <NavLink to={'/search/italian'}>
              <FaPizzaSlice />
              <h4>Italian</h4>
            </NavLink>
          </div>
          <div className='m-4'>
            <NavLink to={'/search/european'}>
              <FaGlobeEurope />
              <h4>European</h4>
            </NavLink>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Category
