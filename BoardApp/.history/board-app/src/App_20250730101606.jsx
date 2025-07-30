import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Insert from './pages/board/Insert';
import List from './pages/board/List';
import Read from './pages/board/Read';
import Update from './pages/board/Update';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="boards" element={<Listst />} />
        <Route path="/boards/insert" element={<Insertrt />} />
        <Route path="/boards/:id" element={<Read />} />
        <Route path="/boards/update/:id" element={<Updateate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App