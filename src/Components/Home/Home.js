import { useState } from 'react'
// import axios from 'axios'

const Home = () => {

  // const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  // const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SEARCH}&cuisine=${search}`
  
  // useEffect(() => {
  //   getData()
  // }, [])

  // const getData = () => {
  //   axios.get(URL)
  //     .then((res) => {
  //       console.log(res.data)
  //       setData(data => [...data, res.data])
  //     })
  //     .catch((err) => {
  //     console.error(err)
  //   })
  // }

  // console.log(data)

  return (
    <>
      <div className='flex justify-center w-full p-5'>
        <div className=''>
          <form className='flex flex-row justify-between' action=''>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mr-2 
            dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
              type='text'
              placeholder='Enter ingredient'
              autoComplete='true'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <input className='text-white bg-teal-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
            p-3 ml-2'
              type='submit'
              value='Search' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Home