import React from 'react'
import Update from '../../components/board/Update'

const UpdateContainer = () => {

  const {id} = useParams()

  // 🧊 state
  const [board, setBoard] = useState({})

  // 게시글 조회 요청
  const getBoard = async () => {
    const response = await boards.select(id)
    const data = await response.data
    console.log(`board : ${data}`);
    setBoard(data)
  }

  useEffect(() => {
    // 게시글 정보
    getBoard()
  }, [])


  return (
    <>
      <Update />
    </>
  )
}

export default UpdateContainer