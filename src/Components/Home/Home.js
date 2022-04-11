import Popular from './Popular'
import Veggies from './Veggie'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <motion.div
        className='min-h-screen'
        initial={{ width: '100%' }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
        <Popular />
        <Veggies />
      </motion.div>
    </>
  )
}

export default Home
