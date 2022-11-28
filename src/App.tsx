import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScreenOne from './Pages/ScreenOne/Index'
import ScreenTwo from './Pages/ScreenTwo/Index'
import ScreenThree from './Pages/ScreenThree/Index'
import ScreenFour from './Pages/ScreenFour/Index'
import Nav from './components/Nav/Index'
import Dashboard from './components/Dashboard/Index'

function App() {

  return (
    <div>
      <Router>
      <div className='md:flex'>
        <Dashboard />
        <div className='sm:h-full sm:w-full'>
          <Nav />
          <Routes>
            <Route path='/' element={<ScreenOne />} />
            <Route path='/two' element={<ScreenTwo />} />
            <Route path='/three' element={<ScreenThree />} />
            <Route path='/four' element={<ScreenFour />} />
          </Routes>
        </div>
      </div>
      </Router>
    </div>
  )
}

export default App
