import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import AnimatedRoutes from './Router/AnimatedRoutes'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  )
}

export default App
