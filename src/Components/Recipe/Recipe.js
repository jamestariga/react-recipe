import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { motion } from 'framer-motion'

const Recipe = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [openInstructions, setOpenInstructions] = useState(false)
  const [openIngredients, setOpenIngredients] = useState(false)

  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {
      tags: `${search.split(' ').join(',')}`,
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

  // const getData = () => {
  //   // Caching the fetched data in the browser
  //   const check = localStorage.getItem('recipe')

  //   if (check) {
  //     setData(JSON.parse(check))
  //     console.log('cached')
  //   } else {
  //     axios
  //       .request(options)
  //       .then((res) => {
  //         console.log(res.data)
  //         localStorage.setItem('recipe', JSON.stringify(res.data.recipes))
  //         setData(res.data.recipes)
  //       })
  //       .catch((err) => {
  //         console.error(err)
  //       })
  //   }
  // }

  const getData = () => {
    axios
      .request(options)
      .then((res) => {
        console.log(res.data)
        setData(res.data.recipes)
      })
      .catch((err) => {
        console.error(err)
      })
  }

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
        <motion.div
          className='min-h-screen'
          initial={{ width: '100%' }}
          animate={{ width: '100%' }}
          exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
          <div className='flex justify-center w-full p-5 mt-40 mb-20 px-20 md:px-10 sm:px-8'>
            <form
              className='flex flex-row justify-between w-4/5 sm:w-full'
              onSubmit={onSubmit}>
              <input
                className=' bg-white text-black w-full rounded-xl border-2 border-neutral-400 focus:outline-none focus:ring focus:ring-stone-300 p-2 mr-4 sm:text-sm transition'
                type='text'
                placeholder='Search Ingredient'
                autoComplete='false'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <input
                className='text-white bg-stone-400 hover:bg-stone-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
          p-3 ml-2 w-40 md:w-20'
                type='submit'
                value='Search'
              />
            </form>
          </div>
          {/* Content Section */}
          <div className='grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-8 p-8 mb-28 md:m-16 md:p-4 sm:m-8 sm:p-2'>
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
                    className='flex flex-col justify-center h-fit bg-stone-400 rounded-3xl'>
                    <div className='w-full rounded-t-3xl overflow-hidden'>
                      <img
                        className='w-full h-full rounded-2xl rounded-b-none duration-300 hover:scale-[1.1]'
                        src={image}
                        alt={image}
                      />
                    </div>
                    <div className='p-4 flex flex-col hover:bg-stone-500 rounded-b-3xl transition'>
                      <div className='min-h-[6rem] sm:min-h-[4rem]'>
                        <h3 className='text-xl text-center xl:text-base sm:text-sm sm:mt-2 mt-4 font-extrabold text-white'>
                          {title}
                        </h3>
                      </div>
                      <div
                        onClick={() => toggleIngredients(key)}
                        className='flex flex-row justify-between items-center font-bold sm:text-sm text-white cursor-pointer mb-4 py-2 border-t-[2px]'>
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
                                <p className='text-white text-base my-2 sm:text-sm duration-300'>
                                  {names.original}
                                </p>
                              </div>
                            )
                          })
                        : null}
                      <div
                        onClick={() => toggleInstructions(key)}
                        className='flex flex-row justify-between items-center font-bold sm:text-sm text-white cursor-pointer mt-4 py-2 border-t-[2px]'>
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
                  </div>
                )
              }
            )}
          </div>
        </motion.div>
      </IconContext.Provider>
    </>
  )
}

export default Recipe
