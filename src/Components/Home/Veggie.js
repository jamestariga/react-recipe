import { useState, useEffect } from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Tile from './Tile'
import { Theme } from './Theme'

const Veggies = () => {
  const [data, setData] = useState([])
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SEARCH}&tags=vegetarian&number=12`

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    // Caching the fetched data in the browser
    const check = localStorage.getItem('veggies')

    if (check) {
      setData(JSON.parse(check))
      console.log('cached')
    } else {
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data)
          localStorage.setItem('veggies', JSON.stringify(res.data.recipes))
          setData(res.data.recipes)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  // const getData = () => {
  //   axios
  //     .get(URL)
  //     .then((res) => {
  //       console.log(res.data)
  //       setData(res.data.recipes)
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //     })
  // }

  console.log(data)

  return (
    <>
      <div className='flex justify-center flex-col px-20 pb-20 xl:px-10 md:px-0 text-black'>
        <h1 className='text-center text-3xl font-extrabold md:text-2xl'>
          Vegetarian Picks
        </h1>
        <Splide
          className='list-disc py-14 md:py-10 cursor-grab'
          options={Theme}
          hasAutoplayProgress>
          {data.map((res, key) => {
            return (
              <SplideSlide
                key={key}
                className='flex justify-center items-center sm:px-8'>
                <>
                  <Tile {...res} />
                </>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </>
  )
}

export default Veggies
