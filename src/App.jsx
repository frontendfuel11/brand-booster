import React from 'react'
import Navigation from './components/common/Navigation'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className=' overflow-x-hidden font-Inter'>
      <Navigation/>
      <HomePage/>
    </div>
  )
}

export default App