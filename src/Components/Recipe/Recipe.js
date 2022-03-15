import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { options } from '../API/Api'

const Recipe = () => {

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
      <div className='flex justify-center border-solid border-2 p-4'>
        <div className='grid gap-4 grid-cols-3 place-items-center md:grid-cols-2 border-solid border-2 p-10 w-full'>
          <div className='flex justify-center border-solid border-2 p-4 w-full'>
            Hello
          </div>
          <div className='flex justify-center border-solid border-2 p-4 w-full'>
            Hello
          </div>
          <div className='flex justify-center border-solid border-2 p-4 w-full'>
            Hello
          </div>
          <div className='flex justify-center border-solid border-2 p-4 w-full'>
            Hello
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipe