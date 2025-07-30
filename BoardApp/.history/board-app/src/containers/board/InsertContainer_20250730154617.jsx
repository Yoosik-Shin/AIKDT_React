import React from 'react'
import Insert from '../../components/board/Insert'
import * as boards from '../../apis/boards'


const InsertContainer = () => {

  // 게시글 등록 요청 핸들러
  const onInsert = async(data, headers) => {
    try {
      const response = await boards.insert(data, headers)
      const data = await response.data
      
    } catch (error) {
      
    }
  }

  return (
    <>
      <Insert />
    </>
  )
}

export default InsertContainer