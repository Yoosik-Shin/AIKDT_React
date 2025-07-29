import './App.css';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'

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
const Board = () => {
  // useParams
  // : react-router v6 이상부터 사용
  // URL 경로의 정의된 파라미터를 가져오는 Hook
  const {id} = useParams()

  return (
    <><></></>
  )
}


export default App;