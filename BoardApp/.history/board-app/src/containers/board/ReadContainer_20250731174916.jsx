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
    
    // 1. 서버에서 응답 파일데이터를 받은 Blob 변환
    // 2. 브라우저를 통해 a 태그로 등록
    // 3. a 태그의 다운로드 기능으로 요청
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link

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