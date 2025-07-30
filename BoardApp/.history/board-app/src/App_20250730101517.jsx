import './App.css';
import Insert from './pages/board/Insert';
import List from './pages/board/List';

import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="boards" element={<Listst />} />
        <Route path="/boards/insert" element={<Insertrt />} />
        <Route path="/boards/:id" element={<Read />} />
        <Route path="/boards/update/:id" element={<Update />} />
      </Routers>
    </BrowserRouter>
  )
}

export default App