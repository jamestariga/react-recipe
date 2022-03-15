import { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    getData(data)
  }, [data])

  const getData = (recipe) => {
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SEARCH}&cuisine=${recipe}`

    axios.get(URL)
      .then((res) => {
        console.log(res.data)
        setData(data => [...data, res.data])
      })
      .catch((err) => {
      console.error(err)
    })
  }

  return (
    <>
      <form action=''>
        <input type='text' label='Search' />
      </form>
    </>
  )
}

export default Search