import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (tags) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SEARCH}&tags=${tags}&number=16`

  useEffect(() => {
    getData()
  }, [tags])

  // const getData = () => {
  //   // Caching the fetched data in the browser
  //   const check = localStorage.getItem(`${storageName}`)

  //   setTimeout(() => {
  //     if (check) {
  //       setData(JSON.parse(check))
  //       console.log('cached')
  //       setLoading(false)
  //     } else {
  //       axios
  //         .get(URL)
  //         .then((res) => {
  //           console.log(res.data)
  //           localStorage.setItem(
  //             `${storageName}`,
  //             JSON.stringify(res.data.recipes)
  //           )
  //           setData(res.data.recipes)
  //         })
  //         .catch((err) => {
  //           console.error(err)
  //         })
  //         .finally(() => {
  //           setLoading(false)
  //         })
  //     }
  //   }, 2000)
  // }

  const getData = () => {
    setTimeout(() => {
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data)
          setData(res.data.recipes)
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }, 2000)
  }

  return [data, { loading }]
}

export default useFetch
