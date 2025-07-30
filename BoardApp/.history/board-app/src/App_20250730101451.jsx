import './App.css';

import React from 'react'
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="boards" element={<List />} />
        <Route path="/boards/insert" element={<Insert />} />
        <Route path="/boards/:id" element={<Read />} />
        <Route path="/boards/update/:id" element={<Update />} />
      </Routers>
    </BrowserRouter>
  )
}

export default App