import { NavLink } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

const Category = () => {
  return (
    <>
      <div className='flex justify-center w-full p-5 mt-40 mb-20 px-20 md:px-10 sm:px-8'>
        <NavLink to={'/search/American'}>
          <FaPizzaSlice />
          <h4>American</h4>
        </NavLink>
        <NavLink to={'/search/Chinese'}>
          <FaPizzaSlice />
          <h4>Chinese</h4>
        </NavLink>
      </div>
    </>
  )
}

export default Category
