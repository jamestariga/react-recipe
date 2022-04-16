import { useState, useEffect } from 'react'
import axios from 'axios'
import Tile from '../Home/Tile'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import Category from './Category'

const Home = () => {
  const [data, setData] = useState([])

  let params = useParams()

  const getData = (name) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SEARCH}&tags=${name}&number=12`
      )
      .then((res) => {
        console.log(res.data)
        setData(res.data.recipes)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getData(params.type)
    // eslint-disable-next-line
  }, [params.type])

  return (
    <>
      <motion.div
        className='min-h-screen'
        initial={{ width: '100%' }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
        <Category />
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
      </motion.div>
    </>
  )
}

export default Home
