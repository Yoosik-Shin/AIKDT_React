import React from 'react'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Home />
      </Routes>
    </BrowserRouter>
  )
}

export default App