import React, { useState } from 'react'
import List from '../../components/board/List'
import * as boards from '../../apis/boards'

const ListContainer = () => {

    // 🧊 state
    const [pagination, setPagination] = useState({})
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)

    // 🎁 게시글 목록 데이터
    const getList = async () => {
      const response = await boards.list(page, size)
      const data = await response.data
      const list = data.list
      const pagination = data.pagination
      console.log(data);
      
    }

  return (
    <>
        <List list={list} pagination={pagination}/>
    </>
  )
}

export default ListContainer