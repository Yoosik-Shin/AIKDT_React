import './App.css';
import Insert from './pages/board/Insert';
import List from './pages/board/List';
import Read from './pages/board/Read';
import Update from './pages/board/Update';

import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="boards" element={<Listst />} />
        <Route path="/boards/insert" element={<Insertrt />} />
        <Route path="/boards/:id" element={<Read />} />
        <Route path="/boards/update/:id" element={<Updateate />} />
      </Routers>
    </BrowserRouter>
  )
}

export default App