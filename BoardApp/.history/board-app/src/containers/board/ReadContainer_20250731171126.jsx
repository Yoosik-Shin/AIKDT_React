import React, { useEffect } from 'react'
import Read from '../../components/board/Read'
import { useParams } from 'react-router-dom'
import * as boards from '../../apis/boards'
import * as files from '../../apis/files'
import { useState } from 'react'


const ReadContainer = () => {

  const {id} = useParams()
  console.log('id:', id);  // string인지 숫자인지 undefined인지 확인


  // 🧊 state
  const [board, setBoard] = useState({})
  const [fileList, setFileList] = useState([])

  // 게시글 조회 요청
  const getBoard = async () => {
    const response = await boards.select(id)
    const data = await response.data  // ⭐ data : 🎁 board, fileList
    setBoard(data.boards)
    setFileList(data.fileList)
  }

  useEffect(() => {
    // 게시글 정보
    getBoard()
  }, [])
  

  return (
    <>
      <Read board={board} fileList={fileList} />
    </>
  )
}

export default ReadContainer