import './App.css';

import React from 'react'
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<Home />}></Route>
        <Route path="boards" element={<List />}></Route>
        <Route path="/boards/insert" element={<Insert />}></Route>
        <Route path="/boards/:id" element={<Read />}></Route>
        <Route path="/boards/update/:id" element={<Home />}></Route>
      </Routers>
    </BrowserRouter>
  )
}

export default App