import React, { useEffect, useState } from 'react'
import Update from '../../components/board/Update'
import { useNavigate, useParams } from 'react-router-dom'
import * as boards from '../../apis/boards'

const UpdateContainer = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  // 🧊 state
  const [board, setBoard] = useState({})
const [fileList, setFileList] = useState([])

  // 게시글 조회 요청
  const getBoard = async () => {
    const response = await boards.select(id)
    const data = await response.data  // ⭐ data : 🎁 board, fileList
    setBoard(data.boards ?? null)
    setFileList(data.fileList ?? [])
  }

  // 다운로드
  const onDownload = async (id, fileName) => {
    // API 요청
    const response = await files.download(id)
    console.log(response);
    
    // 1. 서버에서 응답 파일데이터를 받은 Blob 변환
    // 2. 브라우저를 통해 a 태그로 등록
    // 3. a 태그의 다운로드 기능으로 요청
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

  }

  // 게시글 수정 요청
  const onUpdate = async (data, headers) => {
    try {
      const response = await boards.update(data, headers)
      const msg = await response.data
      console.log(msg);
      alert('수정 완료')
      // 게시글 목록으로 이동
      navigate('/boards')
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    // 게시글 정보
    getBoard()
  }, [])

  // 게시글 삭제 요청
  const onDelete = async (id) => {
    try {
      const response = await boards.remove(id)
      const msg = await response.data
      console.log(msg);
      alert('삭제 완료')
      navigate('/boards')
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
      <Update
       board={board}
       onUpdate={onUpdate} onDelete={onDelete} />
    </>
  )
}

export default UpdateContainer