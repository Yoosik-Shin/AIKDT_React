import './App.css';
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route 
          path='/boards/:id' element={<Board />}
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

  // ?파라미터=값 가져오는 방법
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const category = query.get("category")


  return (
    <>
      <h1>게시판</h1>
      <h3>게시글 id : {id}</h3>
    </>
  )
}


export default App;