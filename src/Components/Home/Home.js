import { useState, useEffect } from 'react'
import axios from 'axios'
import Tile from './Tile'

const Home = () => {

  const [data, setData] = useState([])
  const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SEARCH}&cuisine=chinese&number=12`
  
  useEffect(() => {
    getData()
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

  console.log(data)

  return (
    <>
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