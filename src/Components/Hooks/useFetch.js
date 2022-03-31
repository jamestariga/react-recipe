import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (tags, storageName) => {
  const [data, setData] = useState([])
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SEARCH}&tags=${tags}&number=12`

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    // Caching the fetched data in the browser
    const check = localStorage.getItem(`${storageName}`)

    if (check) {
      setData(JSON.parse(check))
      console.log('cached')
    } else {
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data)
          localStorage.setItem(
            `${storageName}`,
            JSON.stringify(res.data.recipes)
          )
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

  return [data]
}

export default useFetch
