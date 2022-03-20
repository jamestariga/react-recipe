import { useState, useEffect } from 'react'
import axios from 'axios'
import Tile from '../Home/Tile'

const Home = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SEARCH}&query=${search}&number=12&instructionsRequired=true`
  
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const getData = () => {
    axios.get(URL)
      .then((res) => {
        console.log(res.data)
        setData(res.data.results)
      })
      .catch((err) => {
      console.error(err)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getData()
  }

  return (
    <>
      <div className='flex justify-center w-full p-5'>
        <form className='flex flex-row justify-between' onSubmit={onSubmit}>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mr-2 
          dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='text'
            placeholder='Enter ingredient'
            autoComplete='false'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input className='text-white bg-teal-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
          p-3 ml-2'
            type='submit'
            value='Search' />
        </form>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-4 items-center place-items-center xl:grid-cols-3 lg:grid-cols-2 gap-8 h-auto p-8'>
          {data.map((res, key) => {
            return (
              <div key={key}>
                <Tile {...res} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home