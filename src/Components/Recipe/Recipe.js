import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Tile from '../Home/Tile'

const Recipe = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {
      tags: search.toString(),
      number: '6',
      instructionsRequired: 'true'
    },
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const getData = () => {
    axios.request(options)
      .then((res) => {
        console.log(res.data)
        setData(res.data.recipes)
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
            placeholder='Enter diet'
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

export default Recipe