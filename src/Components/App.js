import React from 'react'
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom'
import Recipe from './Recipe/Recipe'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Search from './Search/Search'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </>
  )
}

export default App