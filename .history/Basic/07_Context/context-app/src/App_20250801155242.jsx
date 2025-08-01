import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginContextProvider from './Contexts/LoginContextProvider'


const App = () => {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/user' element={<User />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App