import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Recipe from './Recipe/Recipe'
import { options } from './API/Api'

const App = () => {

  /* eslint-disable no-unused-vars */
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {

    axios.request(options)
      .then((res) => {
        console.log(res.data)
        setData(data => [...data, res.data])
      })
      .catch((err) => {
      console.error(err)
    })
  }
  
  console.log(data)

  return (
    <>
      <Recipe />
    </>
  )
}

export default App