import React from 'react'
import Read from '../../components/board/Read'
import { useParams } from 'react-router-dom'

const ReadContainer = () => {

  const {id} = useParams()

  // 🧊 state
  useState

  return (
    <>
      <Read />
    </>
  )
}

export default ReadContainer