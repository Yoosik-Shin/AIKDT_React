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
          <Route path='/' element={<Login />} />
          <Route path='/' element={<Join />} />
          <Route path='/' element={<User />} />
          <Route path='/' element={<About />} />
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App