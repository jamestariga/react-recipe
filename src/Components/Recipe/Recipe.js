import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Recipe = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {
      tags: search.toString(),
      number: '6'
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
    // Caching the fetched data in the browser
    const check = localStorage.getItem('recipe')

    if (check) {
      setData(JSON.parse(check))
      console.log('cached')
    } else {
      axios
        .request(options)
        .then((res) => {
          console.log(res.data)
          localStorage.setItem('recipe', JSON.stringify(res.data.recipes))
          setData(res.data.recipes)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  console.log(data)

  // {
  //   data.map((steps) => {
  //     steps.analyzedInstructions.map((res) => {
  //       res.steps.map((rez) => {
  //         console.log(rez.step)
  //       })
  //     })
  //   })
  // }

  const onSubmit = (e) => {
    e.preventDefault()
    getData()
  }

  return (
    <>
      <div className='flex justify-center w-full p-5 my-40 px-20'>
        <form className='flex flex-row justify-between w-4/5 sm:w-full' onSubmit={onSubmit}>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mr-2 
          dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-xs'
            type='text'
            placeholder='Search Ingredient'
            autoComplete='false'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className='text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
          p-3 ml-2 w-40 md:w-20'
            type='submit'
            value='Search'
          />
        </form>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-8 h-auto p-8'>
          {data.map(({ image, title, analyzedInstructions: [{ steps }] }, key) => {
            return (
              <div
                key={key}
                className='flex flex-col p-8 sm:px-2 bg-transparent border border-x-slate-500 border-y-slate-500 rounded-3xl bg-teal-400'>
                <div className='w-full px-8 md:px-4 sm:px-2 flex justify-center'>
                  <img className='w-auto h-full rounded-2xl' src={image} alt={image} />
                </div>
                <h3 className='text-base text-center lg:text-sm sm:text-xxs my-10 text-white'>
                  {title}
                </h3>
                {steps.map((step, id) => {
                  return (
                    <div key={id}>
                      <ul>
                        <li className='text-white list-disc'>
                          <p className='text-white'>{step.step}</p>
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Recipe
