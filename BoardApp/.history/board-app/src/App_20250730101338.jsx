import './App.css';

import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/"></Route>
        <Route path="boards"></Route>
        <Route path="/boards/insert"></Route>
        <Route path="/boards/:id"></Route>
        <Route path="/"></Route>
      </Routers>
    </BrowserRouter>
  )
}

export default App