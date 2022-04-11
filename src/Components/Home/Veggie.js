import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Tile from './Tile'
import { Theme } from './Theme'
import useFetch from '../Hooks/useFetch'

const Veggies = () => {
  const [data, { loading }] = useFetch('vegetarian', 'veggies')

  if (loading) return null

  console.log(data)

  return (
    <>
      <div className='flex justify-center flex-col px-20 pb-20 xl:px-10 md:px-0'>
        <h1 className='text-center text-3xl text-zinc-600 font-extrabold md:text-2xl'>
          Vegetarian Picks
        </h1>
        <Splide
          className='list-disc py-14 md:py-10 cursor-grab'
          options={Theme}
          hasAutoplayProgress>
          {data.map((data, key) => {
            return (
              <SplideSlide
                key={key}
                className='flex justify-center items-center sm:px-8'>
                <>
                  <Tile {...data} />
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
