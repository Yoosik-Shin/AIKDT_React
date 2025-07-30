import './App.css';

import React from 'react'
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={Home}></Route>
        <Route path="boards"></Route>
        <Route path="/boards/insert"></Route>
        <Route path="/boards/:id"></Route>
        <Route path="/boards/update/:id"></Route>
      </Routers>
    </BrowserRouter>
  )
}

export default App