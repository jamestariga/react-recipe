import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IconContext } from 'react-icons'

const Recipe = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [openInstructions, setOpenInstructions] = useState(false)
  const [openIngredients, setOpenIngredients] = useState(false)

  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {
      tags: search.toString().split(' ').join(','),
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

  // const getData = () => {
  //   axios
  //     .request(options)
  //     .then((res) => {
  //       console.log(res.data)
  //       setData(res.data.recipes)
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //     })
  // }

  console.log(data)

  const toggleIngredients = (idx) => {
    if (openIngredients === idx) {
      //if clicked question is already active, then close it
      return setOpenIngredients(null)
    }

    setOpenIngredients(idx)
  }

  const toggleInstructions = (index) => {
    if (openInstructions === index) {
      //if clicked question is already active, then close it
      return setOpenInstructions(null)
    }

    setOpenInstructions(index)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getData()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#ffebcc', size: '35px' }}>
        <div className='flex justify-center w-full p-5 mt-40 mb-20 px-20'>
          <form
            className='flex flex-row justify-between w-4/5 sm:w-full'
            onSubmit={onSubmit}>
            <input
              className=' bg-white text-black w-full rounded-xl focus:outline-none focus:ring focus:ring-stone-300 p-2 mr-4 sm:text-xs transition'
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
        {/* Content Section */}
        <div className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-8 p-8 mb-28 md:m-16 sm:m-8 h-fit'>
          {data.map(
            (
              {
                image,
                title,
                analyzedInstructions: [{ steps }],
                extendedIngredients
              },
              key
            ) => {
              return (
                <div
                  key={key}
                  className='flex flex-col justify-center h-fit p-8 sm:px-2 bg-stone-400 hover:bg-stone-500 transition  rounded-3xl'>
                  <div className='w-full p-8 md:p-4'>
                    <img
                      className='w-auto h-full rounded-2xl'
                      src={image}
                      alt={image}
                    />
                  </div>
                  <h3 className='text-xl text-center xl:text-base sm:text-sm my-10 font-extrabold text-white'>
                    {title}
                  </h3>
                  <div
                    onClick={() => toggleIngredients(key)}
                    className='flex flex-row justify-between items-center font-bold sm:text-sm text-white cursor-pointer mb-4 p-2'>
                    <h3>Ingredients:</h3>
                    {openIngredients === key ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdOutlineKeyboardArrowDown />
                    )}
                  </div>
                  {openIngredients === key
                    ? extendedIngredients.map((names, idx) => {
                        return (
                          <div key={idx}>
                            <p className='text-white text-base my-2 sm:text-sm'>
                              {names.original}
                            </p>
                          </div>
                        )
                      })
                    : null}
                  <div
                    onClick={() => toggleInstructions(key)}
                    className='flex flex-row justify-between font-bold sm:text-sm text-white cursor-pointer mt-4 p-2'>
                    <h3>Instructions:</h3>
                    {openInstructions === key ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdOutlineKeyboardArrowDown />
                    )}
                  </div>
                  {openInstructions === key
                    ? steps.map((step, id) => {
                        return (
                          <div key={id}>
                            <p className='text-white tex my-2 sm:text-sm'>
                              <span>Step </span>
                              {step.number}
                              <span>: </span>
                              {step.step}
                            </p>
                          </div>
                        )
                      })
                    : null}
                </div>
              )
            }
          )}
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Recipe
