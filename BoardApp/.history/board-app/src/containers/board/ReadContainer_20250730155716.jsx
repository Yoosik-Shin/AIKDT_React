import React from 'react'
import Read from '../../components/board/Read'
import { useParams } from 'react-router-dom'

const ReadContainer = () => {

  const {id} = useParams()

  // 🧊 state
  const [board, setboard] = useState(second)

  return (
    <>
      <Read />
    </>
  )
}

export default ReadContainer