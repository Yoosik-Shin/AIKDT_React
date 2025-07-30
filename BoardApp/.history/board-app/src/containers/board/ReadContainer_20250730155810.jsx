import React from 'react'
import Read from '../../components/board/Read'
import { useParams } from 'react-router-dom'
import 

const ReadContainer = () => {

  const {id} = useParams()

  // 🧊 state
  const [board, setBoard] = useState({})

  // 게시글 조회 요청
  const getBoard = async () => {
    const response = await boards.select(id)
  }
  return (
    <>
      <Read />
    </>
  )
}

export default ReadContainer