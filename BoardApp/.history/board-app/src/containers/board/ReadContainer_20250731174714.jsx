import React, { useEffect } from 'react'
import Read from '../../components/board/Read'
import { useParams } from 'react-router-dom'
import * as boards from '../../apis/boards'
import * as files from '../../apis/files'
import { useState } from 'react'


const ReadContainer = () => {

  const {id} = useParams()


  // 🧊 state
  const [board, setBoard] = useState([])
  const [fileList, setFileList] = useState([])

  // 게시글 조회 요청
  const getBoard = async () => {
    const response = await boards.select(id)
    const data = await response.data  // ⭐ data : 🎁 board, fileList
    setBoard(data.boards ?? null)
    setFileList(data.fileList ?? [])
  }

  // 다운로드
  const onDawnload = async (id, fileName) => {
    // API 요청
    const response = await files.download(id)
    console.log(response);
    

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