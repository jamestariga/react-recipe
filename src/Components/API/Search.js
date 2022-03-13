import axios from 'axios'

const API = '3c81c9828bba4b6fbf8cec159f532215'

const getData = (recipe) => {
  const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&cuisine=${recipe}`

  axios.get(URL)
    .then((res) => {
      console.log(res.data)
      setData(data => [...data, res.data])
    })
    .catch((err) => {
    console.error(err)
  })
}