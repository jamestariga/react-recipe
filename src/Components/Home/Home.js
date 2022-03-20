import { useState, useEffect } from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Tile from './Tile'

const Home = () => {
  const [data, setData] = useState([])
  const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SEARCH}&cuisine=chinese&number=12`

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    // Caching the fetched data in the browser
    const check = localStorage.getItem('home')

    if (check) {
      setData(JSON.parse(check))
      console.log('cached')
    } else {
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data)
          localStorage.setItem('home', JSON.stringify(res.data.results))
          setData(res.data.results)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  console.log(data)

  return (
    <>
      <div className='flex justify-center flex-col px-20 xl:px-10 md:px-0 text-white'>
        <h1 className='text-center text-3xl font-extrabold my-20 md:text-2xl'>Popular Recipes</h1>
        <Splide
          className='list-disc py-14 md:py-10'
          options={{
            perPage: 3,
            arrows: true,
            pagination: true,
            width: '100vw',
            drag: 'free',
            autoplay: true,
            trimSpace: 'move',
            updateOnMove: true,
            type: 'loop',
            perMove: 1,
            breakpoints: {
              971: {
                perPage: 2
              },
              639: {
                perPage: 1
              }
            }
          }}>
          {data.map((res, key) => {
            return (
              <SplideSlide key={key} className='flex justify-center sm:px-8'>
                <div>
                  <Tile {...res} />
                </div>
              </SplideSlide>
            )
          })}
        </Splide>
      </div>
    </>
  )
}

export default Home
