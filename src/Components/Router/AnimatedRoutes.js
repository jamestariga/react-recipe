import { Route, Routes, useLocation } from 'react-router-dom'
import Recipe from '../Recipe/Recipe'
import Search from '../Search/Search'
import Home from '../Home/Home'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} exact />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/search/:type' element={<Search />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes
