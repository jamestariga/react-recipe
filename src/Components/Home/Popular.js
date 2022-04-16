import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Tile from './Tile'
import { Theme } from './Theme'
import useFetch from '../Hooks/useFetch'
import { AnimatePresence, motion } from 'framer-motion'

const Popular = () => {
  const [data, { loading }] = useFetch('')

  const spinTransition = {
    loop: Infinity,
    ease: 'linear',
    duration: 1
  }

  console.log(data)

  if (loading)
    return (
      <>
        <AnimatePresence>
          <div className='flex flex-col justify-center items-center h-screen text-black'>
            <motion.span
              className='flex justify-center items-center w-20 h-20 border-[0.8rem] border-solid border-slate-300 border-t-[0.8rem] border-t-stone-600 rounded-full'
              animate={{ rotate: 360 }}
              transition={spinTransition}></motion.span>
            <span className='text-stone-500 font-extrabold text-5xl mt-4 lg:text-3xl sm:text-2xl'>
              Fetching Recipe
            </span>
          </div>
        </AnimatePresence>
      </>
    )

  return (
    <>
      <div className='flex justify-center flex-col px-20 pt-20 md:pt-10 xl:px-10 md:px-0'>
        <h1 className='text-center text-3xl font-extrabold text-zinc-600 md:text-2xl'>
          Popular Recipes
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

export default Popular
