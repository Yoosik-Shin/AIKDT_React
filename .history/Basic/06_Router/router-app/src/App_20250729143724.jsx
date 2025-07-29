import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route 
          path='/boards/:id' element={<Board/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

// 🔗 /
function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </>
  )
}

// 🔗 /about
function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </>
  )
}

// 🔗 /boards/:id


export default App;